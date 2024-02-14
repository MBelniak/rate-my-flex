import { currentUser } from '@clerk/nextjs';
import { v2 as cloudinary } from 'cloudinary';
import { databases } from '@/database/appwrite';
import sdk, { Query } from 'node-appwrite';
import { NextResponse } from 'next/server';
import Image from 'next/image';
cloudinary.config({
    cloud_name: 'diu6tq3vr',
    api_key: '248719574372746',
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getCloudinaryImgSrc = (publicId: string) => {
    return cloudinary.url(publicId);
};

export default async function Home() {
    const user = await currentUser();

    if (!user?.id) {
        return NextResponse.redirect('/sign-in');
    }

    console.log(user);
    const posts = (
        await databases.listDocuments<
            sdk.Models.Document & { id: string; userId: string }
        >(process.env.APPWRITE_DB_ID!, 'Posts', [
            Query.equal('userId', user?.id),
        ])
    ).documents;
    const images =
        posts.length > 0
            ? (
                  await databases.listDocuments<
                      sdk.Models.Document & {
                          id: string;
                          postId: string;
                          publicId: string;
                      }
                  >(process.env.APPWRITE_DB_ID!, 'Images', [
                      Query.equal(
                          'postId',
                          posts.map((doc) => doc.id)
                      ),
                  ])
              ).documents
            : [];

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <h1 className={'font-sans'}>Rate My Flex</h1>
            Posts:{' '}
            <ul>
                {posts.map((post) => (
                    <li key={JSON.stringify(post)}>
                        ID: {post.id}, user ID: {post.userId}
                    </li>
                ))}
            </ul>
            Images:{' '}
            <ul>
                {images.map((image) => (
                    <li key={JSON.stringify(image)}>
                        ID: {image.id}, image:{' '}
                        <Image
                            src={getCloudinaryImgSrc(image.publicId)}
                            alt="someone handsome"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
