'use client';
import { CldImage } from 'next-cloudinary';
import React from 'react';
import type { Image } from '@/app/home/PostItem';

export const PostItemImage: React.FC<{ image: Image }> = ({ image }) => {
    return (
        <CldImage
            key={JSON.stringify(image)}
            alt={'someone flexing'}
            src={image.publicId}
            width={500}
            height={700}
        />
    );
};
