import React, { PropsWithChildren } from 'react';
import { Typography } from '../Typography';

export const LoginPage: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            className={
                'flex flex-col gap-10 justify-center items-center min-h-[100svh] bg-background2'
            }
        >
            <div className="flex flex-col items-center gap-2">
                <Typography variant="h1" className="font-logo uppercase">
                    Rate my flex
                </Typography>
                <Typography className="uppercase">Enjoy your body</Typography>
            </div>
            {children}
        </div>
    );
};
