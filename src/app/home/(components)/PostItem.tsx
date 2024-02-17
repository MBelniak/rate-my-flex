import React from 'react';
import { Models, Query } from 'node-appwrite';
import container from '../../../iocContainer';
import { AbstractDatabaseClient } from '@/database';
import type { Post } from '@/model/Post';
import { Image } from '@/model/Image';
import { PostItemImage } from '@/app/home/(components)/PostItemImage.';

const getImagesForPost = async (
    post: Post
): Promise<Models.DocumentList<Image>> => {
    const databases = container.get(AbstractDatabaseClient).getClient();

    return await databases.listDocuments<Image>(
        process.env.APPWRITE_DB_ID!,
        'Images',
        [Query.equal('postId', post.$id)]
    );
};

export async function PostItem({ post }: { post: Post }) {
    const images = await getImagesForPost(post);

    return (
        <div>
            <p>Post ID: {post.$id}</p>
            Images:
            <ul>
                {images.documents.map((image) => (
                    <li key={JSON.stringify(image)}>
                        <PostItemImage image={image} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
