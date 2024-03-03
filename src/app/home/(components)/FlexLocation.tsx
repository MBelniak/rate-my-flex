'use client';

import React, { useEffect, useState } from 'react';

export const FlexLocation: React.FC<{ placeId: string }> = ({ placeId }) => {
    const [locationName, setLocationName] = useState<string>('');

    useEffect(() => {
        const request = {
            placeId,
            fields: ['name'],
        };
        const map = new google.maps.Map(
            document.getElementById('google-map')!,
            // More or less Poland
            {
                center: { lat: 52.235831, lng: 20.932552 },
                zoom: 5,
            }
        );

        const service = new google.maps.places.PlacesService(map);
        service.getDetails(request, (place, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                setLocationName(place?.name ?? '');
            }
        });
    }, [placeId]);

    return (
        <div>
            <p>Flexed at {locationName}</p>
            <div id={'google-map'} />
        </div>
    );
};
