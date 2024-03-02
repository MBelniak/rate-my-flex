'use client';
import { loggerLink } from '@trpc/client';
import {
    experimental_createActionHook,
    experimental_createTRPCNextAppDirClient,
} from '@trpc/next/app-dir/client';
import { experimental_nextHttpLink } from '@trpc/next/app-dir/links/nextHttp';
import type { AppRouter } from '@/server/routers/_app';

function getBaseUrl() {
    if (typeof window !== 'undefined') return '';
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
}

export function getUrl() {
    return getBaseUrl() + '/api';
}

export const apiClient = experimental_createTRPCNextAppDirClient<AppRouter>({
    config() {
        return {
            links: [
                loggerLink({
                    enabled: (op) => true,
                }),
                experimental_nextHttpLink({
                    batch: true,
                    url: getUrl(),
                    headers() {
                        return {
                            'x-trpc-source': 'client',
                        };
                    },
                }),
            ],
        };
    },
});

export const useAction = experimental_createActionHook<AppRouter>({
    links: [loggerLink()],
});
