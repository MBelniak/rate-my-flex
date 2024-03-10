import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { SelectChangeEvent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { AmateurOrProEdit } from '@/app/account/[[...account]]/(components)/AboutYou/AmateurOrProEdit';

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
                            <button
                                className={
                                    'flex gap-2 content-start items-center p-[0.625rem_1.25rem] text-accent rounded-[0.375rem] transition-[background-color] ' +
                                    'normal-case ' +
                                    'hover:bg-primaryDimmedHover'
                                }
                                onClick={() => setIsEditing(true)}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                                <span>Change selection</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};
