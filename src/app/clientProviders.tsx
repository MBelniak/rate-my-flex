'use client';
import React, { PropsWithChildren } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { muiTheme } from '@/styles/muiTheme';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { palette } from '../../palette';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { NextUIProvider } from '@nextui-org/react';
import { dark } from '@clerk/themes';
import { isDarkMode } from '@/util/media';

export const ClientProviders: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ClerkProvider
            appearance={{
                ...(isDarkMode() ? { baseTheme: dark } : {}),
                variables: {
                    colorPrimary: isDarkMode()
                        ? palette.darkSecondary
                        : palette.secondary,
                    colorText: isDarkMode() ? palette.darkText : palette.text,
                },
                elements: {
                    card: 'bg-card dark:bg-darkCard',
                },
            }}
        >
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={muiTheme()}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {children}
                    </LocalizationProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </ClerkProvider>
    );
};

export function NextUiProvider({ children }: { children: React.ReactNode }) {
    return <NextUIProvider>{children}</NextUIProvider>;
}
