import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import PlaceResult = google.maps.places.PlaceResult;

export const SearchPlace: React.FC<{
    setSelectedPlace: Dispatch<SetStateAction<PlaceResult | undefined>>;
}> = ({ setSelectedPlace }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const autocomplete = useRef<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        const options: google.maps.places.AutocompleteOptions = {
            componentRestrictions: { country: 'pl' },
            fields: ['place_id', 'name'],
            strictBounds: false,
        };

        if (inputRef.current) {
            autocomplete.current = new google.maps.places.Autocomplete(
                inputRef.current,
                options
            );
            autocomplete.current?.addListener('place_changed', () => {
                setSelectedPlace(autocomplete.current?.getPlace());
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <input type={'text'} id={'place-search-input'} ref={inputRef} />
        </div>
    );
};
