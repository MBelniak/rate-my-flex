import React, { PropsWithChildren } from 'react';
export const LoginPage: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            className={
                'flex flex-col gap-10 justify-center items-center min-h-[100svh] bg-background2'
            }
        >
            <div className="flex flex-col items-center gap-2">
                <h1 className="font-logo text-4xl uppercase">Rate my flex</h1>
                <p className="font-sans uppercase">Enjoy your body</p>
            </div>
            {children}
        </div>
    );
};
