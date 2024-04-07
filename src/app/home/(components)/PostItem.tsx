import React from 'react';
import type { Post } from '@/model/Post';
import { PostItemImage } from '@/app/home/(components)/PostItemImage';
import { FlexLocation } from '@/app/home/(components)/FlexLocation';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { User } from '@clerk/backend';
import { formatDistanceToNow } from 'date-fns';

export async function PostItem({ post, author }: { post: Post; author: User }) {
    return (
        <Card className={'w-full max-w-[600px] text-white'} isFooterBlurred>
            <CardHeader
                className={
                    'absolute top-0 w-full flex justify-between items-center backdrop-blur-[8px] bg-neutral-950/30'
                }
            >
                <div className={'flex gap-2 items-center'}>
                    {author.hasImage && (
                        <img
                            src={author.imageUrl}
                            alt={'profile-img'}
                            className={
                                'rounded-[50%] w-[40px] h-[40px] object-cover'
                            }
                        />
                    )}
                    <p>
                        {author.firstName} {author.lastName}
                    </p>
                </div>
                <p>{formatDistanceToNow(post.$createdAt)} ago</p>
            </CardHeader>
            <ul>
                {post.imagePublicIds.map((publicId) => (
                    <li key={publicId}>
                        <PostItemImage publicId={publicId} />
                    </li>
                ))}
            </ul>
            <CardFooter
                className={
                    'absolute bottom-0 w-full flex gap-2 items-start bg-neutral-950/30'
                }
            >
                <div className={'flex flex-col'}>
                    <p className={'text-lg'}>{post.description}</p>
                    {post.placeId && <FlexLocation placeId={post.placeId} />}
                </div>
                <div></div>
            </CardFooter>
        </Card>
    );
}
