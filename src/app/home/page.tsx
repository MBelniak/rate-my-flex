import { currentUser } from '@clerk/nextjs';
import { v2 as cloudinary } from 'cloudinary';
import sdk, { Query } from 'node-appwrite';
import { NextResponse } from 'next/server';
import container from '@/context';
import { AbstractDatabaseClient } from '@/database';
import { PostItem } from '@/app/home/PostItem';

cloudinary.config({
    cloud_name: 'diu6tq3vr',
    api_key: '248719574372746',
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export type Post = sdk.Models.Document & { id: string; userId: string };

export default async function Home() {
    const user = await currentUser();

    if (!user?.id) {
        return NextResponse.redirect('/sign-in');
    }

    const databases = container.get(AbstractDatabaseClient).getClient();
    const posts = (
        await databases.listDocuments<
            sdk.Models.Document & { id: string; userId: string }
        >(process.env.APPWRITE_DB_ID!, 'Posts', [
            Query.equal('userId', user?.id),
        ])
    ).documents;

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <h1 className={'font-sans'}>Rate My Flex</h1>
            Posts:{' '}
            <ul>
                {posts.map((post) => (
                    <li key={JSON.stringify(post)}>
                        <PostItem post={post} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
