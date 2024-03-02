import React from 'react';
import { PostItem } from '@/app/home/(components)/PostItem';
import container from '@/iocContainer';
import { AbstractPostsService } from '@/service/posts/PostsService';

export async function PostsList({ userId }: { userId: string }) {
    const postsService = container.get(AbstractPostsService);
    const posts = await postsService.getPostsByUserId(userId);

    return (
        <section>
            Posts:{' '}
            <ul>
                {posts.map((post) => (
                    <li key={JSON.stringify(post)}>
                        <PostItem post={post} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
