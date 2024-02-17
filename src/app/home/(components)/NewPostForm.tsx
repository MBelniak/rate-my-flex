'use client';
import React, { useCallback, useState } from 'react';
import { apiClient } from '@/trpc/client';

// noinspection JSUnusedLocalSymbols - added here only for concept of being able to type it correctly in line 20
export const NewPostForm: React.FC<{ userId: string }> = ({ userId }) => {
    const [description, setDescription] = useState<string>('');
    const submitForm = useCallback(async () => {
        const post = await apiClient.posts.mutate({ description });
    }, [description]);
    return (
        <form onSubmit={submitForm}>
            <div className={'flex gap-1'}>
                <label htmlFor={'description'}>Post description</label>
                <input
                    id={'description'}
                    name={'description'}
                    placeholder={'Add your description here...'}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type={'submit'}>Add new flex!</button>
        </form>
    );
};

// I don't know how to make this shit work without throwing TS2322. Docs mention it not. Type assertion makes it.
// export const NewPostForm: NextComponentType<
//     NextPageContext,
//     {},
//     { userId: string }
// > = trpc.withTRPC(NewPostFormBase) as NextComponentType<
//     NextPageContext,
//     {},
//     { userId: string }
// >;
