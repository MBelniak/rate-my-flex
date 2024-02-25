import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { PostsList } from '@/app/home/(components)/PostsList';
import { NewPostForm } from '@/app/home/(components)/NewPostForm';
import 'primereact/resources/themes/lara-dark-blue/theme.css';

export default async function Home() {
    const user = await currentUser();

    if (!user?.id) {
        return NextResponse.redirect('/sign-in');
    }

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <h1 className={'font-sans'}>Rate My Flex</h1>
            <PostsList userId={user.id} />
            <NewPostForm />
        </div>
    );
}
