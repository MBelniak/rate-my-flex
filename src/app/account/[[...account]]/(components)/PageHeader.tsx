import React from 'react';

export const PageHeader: React.FC<{
    headerText: string;
    subHeaderText: string;
}> = ({ headerText, subHeaderText }) => {
    return (
        <div className={'flex flex-col gap-1'}>
            <h1 className={'font-[600] text-[2rem]'}>{headerText}</h1>
            <p className="text-white/[0.65]">{subHeaderText}</p>
        </div>
    );
};
