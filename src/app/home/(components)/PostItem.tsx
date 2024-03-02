import React from 'react';
import type { Post } from '@/model/Post';
import { PostItemImage } from '@/app/home/(components)/PostItemImage.';

export async function PostItem({ post }: { post: Post }) {
    return (
        <div>
            <p>Post ID: {post.$id}</p>
            <p>Post description: {post.description}</p>
            Images:
            <ul>
                {post.imagePublicIds.map((publicId) => (
                    <li key={publicId}>
                        <PostItemImage publicId={publicId} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
