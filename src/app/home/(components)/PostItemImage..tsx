'use client';
import { CldImage } from 'next-cloudinary';
import React from 'react';

export const PostItemImage: React.FC<{ publicId: string }> = ({ publicId }) => {
    return (
        <CldImage
            key={publicId}
            alt={'someone flexing'}
            src={publicId}
            width={500}
            height={700}
        />
    );
};
