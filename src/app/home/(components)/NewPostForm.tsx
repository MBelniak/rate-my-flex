'use client';
import React, { useCallback, useRef, useState } from 'react';
import { Button } from '@nextui-org/react';
import { FileUpload } from 'primereact/fileupload';

export const NewPostForm: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const fileUploadRef = useRef<FileUpload | null>(null);
    const submitForm = useCallback(async () => {
        const images = fileUploadRef.current?.getFiles();
        const data = new FormData();
        data.append('description', description);
        if (images) {
            console.dir(images);
            images.forEach((image) => {
                data.append('file', image);
            });
        }
        await fetch('/api/posts', {
            method: 'POST',
            body: data,
        });
    }, [description]);
    return (
        <div>
            <h2>Upload new post</h2>
            <form>
                <div className={'grid [grid-template-columns:1fr_4fr] gap-4'}>
                    <label htmlFor={'description'}>Post description</label>
                    <input
                        id={'description'}
                        name={'description'}
                        placeholder={'Add your description here...'}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label htmlFor={'images'}>Images</label>
                    <FileUpload
                        name="images"
                        multiple
                        accept="image/*"
                        maxFileSize={1000000}
                        emptyTemplate={
                            <p className="m-0">
                                Drag and drop files to here to upload.
                            </p>
                        }
                        cancelOptions={{
                            className: 'hidden',
                        }}
                        uploadOptions={{
                            className: 'hidden',
                        }}
                        ref={fileUploadRef}
                    />
                </div>
                <Button onClick={submitForm}>Add new flex!</Button>
            </form>
        </div>
    );
};
