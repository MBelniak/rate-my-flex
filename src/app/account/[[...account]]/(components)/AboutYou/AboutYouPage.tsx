import { PageHeader } from '@/app/account/[[...account]]/(components)/PageHeader';
import { PrimaryInterest } from '@/app/account/[[...account]]/(components)/AboutYou/PrimaryInterest';
import { DateOfBirth } from '@/app/account/[[...account]]/(components)/AboutYou/DateOfBirth';
import React from 'react';
import { AmateurOrPro } from '@/app/account/[[...account]]/(components)/AboutYou/AmateurOrPro';

export const AboutYouPage: React.FC = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <PageHeader
                headerText={'About you'}
                subHeaderText={'Tell the audience more about yourself'}
            />
            <DateOfBirth />
            <PrimaryInterest />
            <AmateurOrPro />
        </div>
    );
};
