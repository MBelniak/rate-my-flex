import { v2 as cloudinary } from 'cloudinary';
import { redirect } from 'next/navigation';

cloudinary.config({
    cloud_name: 'rate-my-flex',
    api_key: '248719574372746',
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default function Home() {
    return redirect('/home');
}
