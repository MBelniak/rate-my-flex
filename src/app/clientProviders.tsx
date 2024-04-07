'use client';
import React, { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { muiTheme } from '@/styles/muiTheme';
import { ThemeProvider } from '@mui/material';
import { palette } from '../../palette';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { NextUIProvider } from '@nextui-org/react';

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ClerkProvider
            appearance={{
                variables: {
                    colorPrimary: palette.secondary,
                    colorText: palette.text,
                },
                elements: {
                    card: 'bg-card',
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

export function NextUiProvider({ children }: { children: React.ReactNode }) {
    return <NextUIProvider>{children}</NextUIProvider>;
}
