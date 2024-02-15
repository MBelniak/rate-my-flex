import { v2 as cloudinary } from 'cloudinary';
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
