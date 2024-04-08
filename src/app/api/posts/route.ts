import { NextRequest, NextResponse } from 'next/server';
import container from '@/iocContainer';
import { AbstractPostsService } from '@/service/posts/PostsService';
import { uploadFileToCloudinary } from '@/service/cloudinary';
import { currentUser } from '@clerk/nextjs';
import prettyBytes from 'pretty-bytes';
import { Logger } from 'winston';
import { botDMiddleware, withLogging } from '@/app/api/(utils)/middlewares';

const getFormFiles = (formData: FormData): File[] => {
    const logger = container.get(Logger);

    const files = formData.getAll('file') as File[] | null;
    if (files?.length) {
        logger.info(
            `Received ${files.length} files`,
            Object.fromEntries(
                files.map((file) => [file.name, prettyBytes(file.size)])
            )
        );
    }
    return files ?? [];
};

async function createPost(request: NextRequest) {
    const logger = container.get(Logger);

    try {
        const user = await currentUser();
        if (!user) {
            return new NextResponse(null, {
                status: 401,
            });
        }
        const formData = await request.formData();
        const files = getFormFiles(formData);

        const description = formData.get('description') as string | null;
        logger.info('Post description: ' + description);
        const placeId = formData.get('placeId') as string | null;
        logger.info('Flex location: ' + placeId);

        const postsService = container.get(AbstractPostsService);

        let cloudinaryUploadResult;
        try {
            cloudinaryUploadResult = await Promise.all(
                files.map(uploadFileToCloudinary)
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
        const post = await postsService.createNewPost({
            placeId,
            userId: user.id,
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

export const POST = withLogging(botDMiddleware(createPost));
