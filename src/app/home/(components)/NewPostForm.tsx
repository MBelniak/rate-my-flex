'use client';
import React, { useCallback, useRef, useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { SearchPlace } from '@/app/home/(components)/SearchPlace';
import PlaceResult = google.maps.places.PlaceResult;
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const NewPostForm: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const fileUploadRef = useRef<FileUpload | null>(null);
    const [selectedPlace, setSelectedPlace] = useState<PlaceResult | undefined>(
        undefined
    );

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
        if (selectedPlace && selectedPlace.place_id) {
            data.append('placeId', selectedPlace.place_id);
        }
        await fetch('/api/posts', {
            method: 'POST',
            body: data,
        });
    }, [description, selectedPlace]);
    return (
        <Card className="my-[1rem]">
            <CardHeader>
                <Typography variant="h2">Upload new post</Typography>
            </CardHeader>
            <CardContent>
                <form>
                    <div className={'flex flex-col gap-4 py-2'}>
                        <div
                            className={
                                'grid [grid-template-columns:1fr_4fr] gap-4'
                            }
                        >
                            <Typography
                                variant={'label'}
                                htmlFor={'description'}
                            >
                                Post description
                            </Typography>
                            <Input
                                id={'description'}
                                name={'description'}
                                placeholder={'Add your description here...'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <Typography variant={'label'} htmlFor={'images'}>
                                Images
                            </Typography>
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
                        <Typography variant={'label'} htmlFor={'images'}>
                            Where did you flex?
                        </Typography>
                        <SearchPlace setSelectedPlace={setSelectedPlace} />
                        <Button onClick={submitForm}>Add new flex!</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
