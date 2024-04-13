import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { PostsList } from '@/app/home/(components)/PostsList';
import { NewPostForm } from '@/app/home/(components)/NewPostForm';
import { Box, Typography } from '@mui/material';

export default async function Home() {
    const user = await currentUser();

    if (!user?.id) {
        return NextResponse.redirect('/sign-in');
    }

    return (
        <div className="flex flex-col justify-center items-center p-8">
            <Box sx={{display: 'flex', width: '100%', padding: 4}}>
                <Typography variant="h4" component="h4">
                    Last flexes
                </Typography>
            </Box>
            <PostsList user={user} />
        </div>
    );
}
