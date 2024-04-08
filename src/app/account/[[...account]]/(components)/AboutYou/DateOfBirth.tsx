import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { DateOfBirthEdit } from '@/app/account/[[...account]]/(components)/AboutYou/DateOfBirthEdit';
import { InitEditButton } from '@/app/account/[[...account]]/(components)/AboutYou/InitEditButton';

export const DateOfBirth: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <Section sectionTitle={'Date of birth'}>
            <div className={'text-[0.8125rem] p-2'}>
                {isEditing ? (
                    <DateOfBirthEdit setIsEditing={setIsEditing} />
                ) : (
                    <div className={'flex flex-col gap-2 '}>
                        <p>09/07/1997</p>
                        <InitEditButton onClick={() => setIsEditing(true)}>
                            <span>Change date of birth</span>
                        </InitEditButton>
                    </div>
                )}
            </div>
        </Section>
    );
};
