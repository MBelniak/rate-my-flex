import React, { useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { DateOfBirthEdit } from '@/app/account/[[...account]]/(components)/AboutYou/DateOfBirthEdit';

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
                        <button
                            className={
                                'flex gap-2 content-start items-center p-[0.625rem_1.25rem] text-accent rounded-[0.375rem] transition-[background-color] ' +
                                'normal-case ' +
                                'hover:bg-primaryDimmedHover'
                            }
                            onClick={() => setIsEditing(true)}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                            <span>Change date of birth</span>
                        </button>
                    </div>
                )}
            </div>
        </Section>
    );
};
