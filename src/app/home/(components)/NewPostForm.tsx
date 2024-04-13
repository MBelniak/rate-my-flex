'use client';

import React, { useCallback, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { FileUpload } from 'primereact/fileupload';
import { SearchPlace } from '@/app/home/(components)/SearchPlace';
import PlaceResult = google.maps.places.PlaceResult;
import { Box, InputLabel, OutlinedInput } from '@mui/material';
import { AccessTime, Add } from '@mui/icons-material';

export const NewPostForm: React.FC = () => {
    const [description, setDescription] = useState('');
    const fileUploadRef = useRef<FileUpload | null>(null);
    const [selectedPlace, setSelectedPlace] = useState<PlaceResult | undefined>(
        undefined
    );
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        try {
            await fetch('/api/posts', {
                method: 'POST',
                body: data,
            });
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, [description, selectedPlace]);
    return (
            <form className="flex flex-col gap-4 w-96">
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
                            <InputLabel htmlFor={'description'}>Description</InputLabel>
                            <OutlinedInput
                                id={'description'}
                                name={'description'}
                                placeholder={'Description'}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
                            <InputLabel htmlFor={'images'}>Images</InputLabel>
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
                        </Box>
                    <SearchPlace setSelectedPlace={setSelectedPlace} />
                    <Button
                        variant="contained"
                        color={'primary'}
                        className={'font-[600] uppercase'}
                        onClick={submitForm}
                        endIcon={isLoading ? <AccessTime /> : <Add />}
                    >
                        Add new flex!
                    </Button>
            </form>
    );
};
