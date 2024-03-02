import { NextRequest, NextResponse } from 'next/server';
import container from '@/iocContainer';
import { AbstractPostsService } from '@/service/posts/PostsService';
import { uploadFileToCloudinary } from '@/service/cloudinary';
import { currentUser } from '@clerk/nextjs';
import { Logger } from '@/server/Logger';
import prettyBytes from 'pretty-bytes';

const withLogging = (
    handler: (
        request: NextRequest,
        response: NextResponse
    ) => Promise<NextResponse>
) => {
    return async (request: NextRequest, response: NextResponse) => {
        const logger = Logger.getLogger();
        logger.info(`Received POST request /api/posts`, request.headers);
        return handler(request, response);
    };
};

async function createPost(request: NextRequest) {
    const logger = Logger.getLogger();

    try {
        const user = await currentUser();
        if (!user) {
            return new NextResponse(null, {
                status: 401,
            });
        }
        const formData = await request.formData();
        const files = formData.getAll('file') as File[] | null;
        if (files?.length) {
            logger.info(
                `Received ${files.length} files`,
                Object.fromEntries(
                    files.map((file) => [file.name, prettyBytes(file.size)])
                )
            );
        }

        const description = formData.get('description') as string | null;
        logger.info('Post description: ' + description);

        const postsService = container.get(AbstractPostsService);

        let cloudinaryUploadResult;
        try {
            cloudinaryUploadResult = await Promise.all(
                (files ?? []).map(uploadFileToCloudinary)
            );

            cloudinaryUploadResult.forEach((result) => {
                logger.info(
                    'Uploaded image with public_id: ' + result.public_id
                );
            });
        } catch (error) {
            logger.error('Server error while saving images', error);
            return new NextResponse('Server error while saving images', {
                status: 500,
            });
        }
        const post = await postsService.createNewPost(user.id, {
            description: description ?? '',
            imagePublicIds: cloudinaryUploadResult.map(
                (result) => result.public_id
            ),
        });
        logger.info(`Saved post with id ${post.$id}`, post);
    } catch (error) {
        logger.error('Server error while creating new post', error);
        return new NextResponse('Server error while creating new post', {
            status: 500,
        });
    }
    return new NextResponse(null, { status: 200 });
}

export const POST = withLogging(createPost);
