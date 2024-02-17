import React from 'react';
import sdk, { Models, Query } from 'node-appwrite';
import type { Post } from '@/app/home/page';
import container from '@/context';
import { AbstractDatabaseClient } from '@/database';
import { PostItemImage } from '@/app/home/PostItemImage.';

export type Image = sdk.Models.Document & {
    id: string;
    postId: string;
    publicId: string;
};

const getImagesForPost = async (
    post: Post
): Promise<Models.DocumentList<Image>> => {
    const databases = container.get(AbstractDatabaseClient).getClient();

    return await databases.listDocuments<
        sdk.Models.Document & {
            id: string;
            postId: string;
            publicId: string;
        }
    >(process.env.APPWRITE_DB_ID!, 'Images', [Query.equal('postId', post.id)]);
};

export async function PostItem({ post }: { post: Post }) {
    const images = await getImagesForPost(post);

    return (
        <div>
            <p>Post ID: {post.id}</p>
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
