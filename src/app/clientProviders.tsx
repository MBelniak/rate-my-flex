'use client';
import React, { PropsWithChildren, useEffect } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { muiTheme } from '@/styles/muiTheme';
import { ThemeProvider } from '@mui/material';
import { palette } from '../../palette';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { NextUIProvider } from '@nextui-org/react';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import axios from 'axios';
import { REQUEST_ID_HEADER } from '../../lib/botd/constants';

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

export const AxiosBotdInterceptor: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const { isLoading, error, data, getData } = useVisitorData(
        { extendedResult: true },
        { immediate: true }
    );

    useEffect(() => {
        if (!isLoading && !error && data?.requestId) {
            const interceptorId = axios.interceptors.request.use((req) => {
                req.headers.set(REQUEST_ID_HEADER, data.requestId);
                getData();
                return req;
            });
            return () => axios.interceptors.request.eject(interceptorId);
        }
    }, [isLoading, error, data, getData]);

    return children;
};
