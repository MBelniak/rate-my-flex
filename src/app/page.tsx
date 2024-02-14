import { currentUser } from '@clerk/nextjs';
import { v2 as cloudinary } from 'cloudinary';
import { databases } from '@/database/appwrite';
import sdk, { Query } from 'node-appwrite';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

cloudinary.config({
    cloud_name: 'diu6tq3vr',
    api_key: '248719574372746',
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getCloudinaryImgSrc = (publicId: string) => {
    return cloudinary.url(publicId);
};

export default function Home() {
    return redirect('/home');
}
