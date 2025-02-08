import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { PostsList } from '@/app/home/(components)/PostsList';
import { NewPostForm } from '@/app/home/(components)/NewPostForm';
import { Typography } from '@/components/Typography';

export default async function Home() {
    const user = await currentUser();

    if (!user?.id) {
        return NextResponse.redirect('/sign-in');
    }

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <Typography variant="h1">Rate My Flex</Typography>
            <NewPostForm />
            <PostsList user={user} />
        </div>
    );
}
