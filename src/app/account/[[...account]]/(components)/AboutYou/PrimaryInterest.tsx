import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { PrimaryInterestEdit } from '@/app/account/[[...account]]/(components)/AboutYou/PrimaryInterestEdit';

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
                        <button
                            className={
                                'flex gap-2 content-start items-center p-[0.625rem_1.25rem] text-accent rounded-[0.375rem] transition-[background-color] ' +
                                'normal-case ' +
                                'hover:bg-primaryDimmedHover'
                            }
                            onClick={() => setIsEditing(true)}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                            <span>Change primary interest</span>
                        </button>
                    </div>
                )}
            </div>
        </Section>
    );
};
