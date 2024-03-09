'use client';

import React, { useEffect, useState } from 'react';

export const FlexLocation: React.FC<{ placeId: string }> = ({ placeId }) => {
    const [locationName, setLocationName] = useState<string>('');
    const [locationPending, setLocationPending] = useState(true);

    useEffect(() => {
        setLocationPending(true);
        (async () => {
            const { Map } = (await google.maps.importLibrary(
                'maps'
            )) as google.maps.MapsLibrary;

            const request = {
                placeId,
                fields: ['name'],
            };

            const map = new Map(
                document.getElementById('google-map')!,
                // More or less Poland
                {
                    center: { lat: 52.235831, lng: 20.932552 },
                    zoom: 5,
                }
            );

            const service = new google.maps.places.PlacesService(map);
            service.getDetails(request, (place, status) => {
                setLocationPending(false);
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    setLocationName(place?.name ?? '');
                }
            });
        })();
    }, [placeId]);

    return (
        <div>
            {locationPending ? (
                <p>Loading flex location...</p>
            ) : (
                <p>Flexed at {locationName}</p>
            )}
            <div id={'google-map'} />
        </div>
    );
};
