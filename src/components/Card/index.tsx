import { Stack, StackProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { palette } from '../../../palette';

export const Card: React.FC<PropsWithChildren<StackProps>> = ({
    children,
    ...props
}) => {
    return (
        <Stack
            {...props}
            className={`flex-col rounded-[1rem] bg-card dark:bg-darkCard shadow-card p-[2.375rem+2rem+3rem] ${props.className}`}
        >
            {children}
        </Stack>
    );
};
