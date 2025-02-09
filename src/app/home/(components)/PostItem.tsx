import React from 'react';
import type { Post } from '@/model/Post';
import { PostItemImage } from '@/app/home/(components)/PostItemImage';
import { FlexLocation } from '@/app/home/(components)/FlexLocation';
import { User } from '@clerk/backend';
import { formatDistanceToNow } from 'date-fns';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { PostImagesCarousel } from '@/app/home/(components)/PostImagesCarousel';

export async function PostItem({ post, author }: { post: Post; author: User }) {
    return (
        <Card className={'w-full max-w-[600px] relative'}>
            <CardHeader
                className={'w-full flex justify-between backdrop-blur-[8px]'}
            >
                <div className={'flex justify-between items-center'}>
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
                </div>
            </CardHeader>
            <CardContent className={'p-0'}>
                {post.imagePublicIds.length === 1 && (
                    <PostItemImage publicId={post.imagePublicIds.at(0)!} />
                )}
                {post.imagePublicIds.length > 1 && (
                    <PostImagesCarousel imagesIds={post.imagePublicIds} />
                )}
            </CardContent>
            <CardFooter className={'w-full flex gap-2 items-start p-4'}>
                <div className={'flex flex-col'}>
                    <p className={'text-lg'}>{post.description}</p>
                    {post.placeId && <FlexLocation placeId={post.placeId} />}
                </div>
            </CardFooter>
        </Card>
    );
}
