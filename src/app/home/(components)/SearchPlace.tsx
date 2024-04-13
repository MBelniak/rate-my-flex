import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import PlaceResult = google.maps.places.PlaceResult;
import { Box, InputLabel, OutlinedInput } from '@mui/material';

export const SearchPlace: React.FC<{
    setSelectedPlace: Dispatch<SetStateAction<PlaceResult | undefined>>;
}> = ({ setSelectedPlace }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const autocomplete = useRef<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        (async () => {
            const { Autocomplete } = (await google.maps.importLibrary(
                'places'
            )) as google.maps.PlacesLibrary;
            const options: google.maps.places.AutocompleteOptions = {
                componentRestrictions: { country: 'pl' },
                fields: ['place_id', 'name'],
                strictBounds: false,
            };

            if (inputRef.current) {
                autocomplete.current = new Autocomplete(
                    inputRef.current,
                    options
                );
                autocomplete.current?.addListener('place_changed', () => {
                    setSelectedPlace(autocomplete.current?.getPlace());
                });
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
            <InputLabel htmlFor={'place-search-input'}>Where did you flex?</InputLabel>
            <OutlinedInput type={'text'} id={'place-search-input'} ref={inputRef} style={{zIndex: 999}} placeholder={'Search...'} />
        </Box>
    );
};
