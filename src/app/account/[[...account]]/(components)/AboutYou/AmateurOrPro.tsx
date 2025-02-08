import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { AmateurOrProEdit } from '@/app/account/[[...account]]/(components)/AboutYou/AmateurOrProEdit';
import { InitEditButton } from '@/app/account/[[...account]]/(components)/AboutYou/InitEditButton';
import { Typography } from '@/components/Typography';

export const AmateurOrPro: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Section sectionTitle={'I am...'}>
            <div className={'text-[0.8125rem] p-2'}>
                <div className={'flex flex-col gap-2 '}>
                    {isEditing ? (
                        <AmateurOrProEdit setIsEditing={setIsEditing} />
                    ) : (
                        <div className={'flex flex-col gap-2'}>
                            <Typography>
                                {'Tell people if you are an amateur or pro'}
                            </Typography>
                            <InitEditButton onClick={() => setIsEditing(true)}>
                                <Typography variant="body2">
                                    Change selection
                                </Typography>
                            </InitEditButton>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
};
