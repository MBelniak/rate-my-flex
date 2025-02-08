import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { DateOfBirthEdit } from '@/app/account/[[...account]]/(components)/AboutYou/DateOfBirthEdit';
import { InitEditButton } from '@/app/account/[[...account]]/(components)/AboutYou/InitEditButton';
import { Typography } from '@/components/Typography';

export const DateOfBirth: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <Section sectionTitle={'Date of birth'}>
            <div className={'p-2'}>
                {isEditing ? (
                    <DateOfBirthEdit setIsEditing={setIsEditing} />
                ) : (
                    <div className={'flex flex-col gap-2 '}>
                        <Typography>09/07/1997</Typography>
                        <InitEditButton onClick={() => setIsEditing(true)}>
                            <Typography variant="body2">
                                Change date of birth
                            </Typography>
                        </InitEditButton>
                    </div>
                )}
            </div>
        </Section>
    );
};
