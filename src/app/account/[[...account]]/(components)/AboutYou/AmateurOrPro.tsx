import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { SelectChangeEvent } from '@mui/material';
import { AmateurOrProEdit } from '@/app/account/[[...account]]/(components)/AboutYou/AmateurOrProEdit';
import { InitEditButton } from '@/app/account/[[...account]]/(components)/AboutYou/InitEditButton';

const options = [
    {
        value: 'amateur',
        label: 'an amateur',
    },
    {
        value: 'pro',
        label: 'a pro',
    },
];
export const AmateurOrPro: React.FC = () => {
    const [value, setValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const currentLabel = options.find(
        (option) => option.value === value
    )?.label;

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <Section sectionTitle={'I am...'}>
            <div className={'text-[0.8125rem] p-2'}>
                <div className={'flex flex-col gap-2 '}>
                    {isEditing ? (
                        <AmateurOrProEdit setIsEditing={setIsEditing} />
                    ) : (
                        <div className={'flex flex-col gap-2'}>
                            <span>{currentLabel ?? 'Not yet specified'}</span>
                            <InitEditButton onClick={() => setIsEditing(true)}>
                                <span>Change selection</span>
                            </InitEditButton>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};
