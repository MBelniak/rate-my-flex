import { Typography } from '@/components/Typography';
import React from 'react';

export const PageHeader: React.FC<{
    headerText: string;
    subHeaderText: string;
}> = ({ headerText, subHeaderText }) => {
    return (
        <div className={'flex flex-col gap-1'}>
            <Typography variant="h1">{headerText}</Typography>
            <Typography>{subHeaderText}</Typography>
        </div>
    );
};
