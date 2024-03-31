'use client';
import React, { PropsWithChildren } from 'react';
import { dark } from '@clerk/themes';
import { ClerkProvider } from '@clerk/nextjs';
import { muiTheme } from '@/styles/muiTheme';
import { ThemeProvider } from '@mui/material';
import { palette } from '../../palette';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: {
                    colorPrimary: palette.primaryDimmed,
                },
            }}
        >
            <ThemeProvider theme={muiTheme}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {children}
                </LocalizationProvider>
            </ThemeProvider>
        </ClerkProvider>
    );
};
