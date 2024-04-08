'use client';
import { CldImage } from 'next-cloudinary';
import React from 'react';

export const PostItemImage: React.FC<{ publicId: string }> = ({ publicId }) => {
    return (
        <CldImage
            key={publicId}
            alt={'someone flexing'}
            src={publicId}
            width={600}
            height={700}
            className="object-cover"
        />
    );
};
