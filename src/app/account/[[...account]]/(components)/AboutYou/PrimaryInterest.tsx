import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { PrimaryInterestEdit } from '@/app/account/[[...account]]/(components)/AboutYou/PrimaryInterestEdit';
import { InitEditButton } from '@/app/account/[[...account]]/(components)/AboutYou/InitEditButton';

export const PrimaryInterest: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <Section sectionTitle={'Primary interest'}>
            <div className={'text-[0.8125rem] p-2'}>
                {isEditing ? (
                    <PrimaryInterestEdit setIsEditing={setIsEditing} />
                ) : (
                    <div className={'flex flex-col gap-2'}>
                        <p>Powerlifting</p>
                        <InitEditButton onClick={() => setIsEditing(true)}>
                            <span>Change primary interest</span>
                        </InitEditButton>
                    </div>
                )}
            </div>
        </Section>
    );
};
