import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { PrimaryInterestEdit } from '@/app/account/[[...account]]/(components)/AboutYou/PrimaryInterestEdit';
import { InitEditButton } from '@/app/account/[[...account]]/(components)/AboutYou/InitEditButton';
import { Typography } from '@/components/Typography';

export const PrimaryInterest: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <Section sectionTitle={'Primary interest'}>
            <div className={'text-[0.8125rem] p-2'}>
                {isEditing ? (
                    <PrimaryInterestEdit setIsEditing={setIsEditing} />
                ) : (
                    <div className={'flex flex-col gap-2'}>
                        <Typography>Powerlifting</Typography>
                        <InitEditButton onClick={() => setIsEditing(true)}>
                            <Typography variant="body2">
                                Change primary interest
                            </Typography>
                        </InitEditButton>
                    </div>
                )}
            </div>
        </Section>
    );
};
