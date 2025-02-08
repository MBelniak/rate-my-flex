import React from 'react';
import { PostItem } from '@/app/home/(components)/PostItem';
import container from '@/iocContainer';
import { AbstractPostsService } from '@/service/posts/PostsService';
import { User } from '@clerk/backend';

export async function PostsList({ user }: { user: User }) {
    const postsService = container.get(AbstractPostsService);
    const posts = await postsService.getPostsByUserId(user.id);

    return (
        <section className={'w-full px-8'}>
            <div className={'flex flex-col gap-4 items-center'}>
                {posts
                    .filter((post) => post.imagePublicIds.length > 0)
                    .map((post) => (
                        <PostItem
                            key={JSON.stringify(post)}
                            post={post}
                            author={user}
                        />
                    ))}
            </div>
        </section>
    );
}
