import { NextRequest, NextResponse } from 'next/server';
import container from '@/iocContainer';
import { Logger } from 'winston';
import { REQUEST_ID_HEADER, TIMEOUT } from '../../../../lib/botd/constants';
import {
    FingerprintJsServerApiClient,
    Region,
} from '@fingerprintjs/fingerprintjs-pro-server-api';

const isBotdEnabled = (req: NextRequest): boolean => {
    const logger = container.get(Logger);
    if (!process.env.NEXT_PUBLIC_BOTD_API_TOKEN) {
        logger.error(
            'NEXT_PUBLIC_BOTD_API_TOKEN env variable not found, bot detection is not enabled!'
        );
        return false;
    }
    if (!req.headers.has(REQUEST_ID_HEADER)) {
        logger.error(
            `Missing ${REQUEST_ID_HEADER} in header, bot detection is not enabled!`
        );
        return false;
    }
    return true;
};

export const withLogging = (
    handler: (
        request: NextRequest,
        response: NextResponse
    ) => Promise<NextResponse>
) => {
    return async (request: NextRequest, response: NextResponse) => {
        const logger = container.get(Logger);
        logger.info(`Received POST request /api/posts`, request.headers);
        return handler(request, response);
    };
};

export const respond403WithMessage = (message: string) => {
    const logger = container.get(Logger);
    logger.warn(message);
    return NextResponse.json(
        {
            message,
        },
        { status: 403 }
    );
};

export const botDMiddleware = (
    handler: (
        request: NextRequest,
        response: NextResponse
    ) => Promise<NextResponse>
) => {
    return async (request: NextRequest, response: NextResponse) => {
        if (!isBotdEnabled(request)) {
            return handler(request, response);
        }

        try {
            const client = new FingerprintJsServerApiClient({
                region: Region.EU,
                apiKey: process.env.NEXT_PRIVATE_BOTD_API_TOKEN!,
            });
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => {
                    reject(new Error('Botd timeout'));
                }, TIMEOUT);
            });
            const eventRequest = client.getEvent(
                request.headers.get(REQUEST_ID_HEADER) as string
            );
            const eventResponse = (await Promise.race([
                eventRequest,
                timeoutPromise,
            ])) as Awaited<typeof eventRequest>;
            const botDetection = eventResponse.products?.botd?.data;

            if (botDetection?.bot.result === 'bad') {
                return respond403WithMessage(
                    'Malicious bot detected, scraping flight data is not allowed.'
                );
            }
            // Need to think of how to regenerate REQUEST_ID per request
            // if (
            //     Date.now() - Number(new Date(botDetection?.time ?? '')) >
            //     3000
            // ) {
            //     return NextResponse.json(
            //         {
            //             message: 'Old visit detected, potential replay attack.',
            //         },
            //         { status: 403 }
            //     );
            // }

            // TODO IP matching requires x-forwarded-for header

            const fpRequestOrigin = new URL(botDetection?.url ?? '').origin;
            if (
                fpRequestOrigin !== request.headers.get('origin')
                // Don't know our domain yet
                // fpRequestOrigin !== 'yourdomain.com' ||
                // req.headers.get('origin') !== 'yourdomain.com'
            ) {
                return respond403WithMessage(
                    'Origin mismatch detected, potential spoofing attack.'
                );
            }

            container.get(Logger).info("Congrats! You're (probably) not a bot");
        } catch (error) {
            // In our case it's just the free plan expired :)
            // res.status(500).json({
            //     message: "RequestId not found, potential spoofing detected.",
            // });
            container
                .get(Logger)
                .warn(
                    'Request to botd failed, probably free plan expired',
                    error
                );
        }
        return handler(request, response);
    };
};
