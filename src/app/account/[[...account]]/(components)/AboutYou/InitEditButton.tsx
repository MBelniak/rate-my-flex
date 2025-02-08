import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';

export const InitEditButton: React.FC<
    React.PropsWithChildren<{ onClick: () => void }>
> = ({ children, onClick }) => {
    return (
        <button
            className={
                'flex gap-2 content-start items-center p-[0.625rem_1.25rem] text-secondary rounded-[0.375rem] transition-[background-color] ' +
                'normal-case ' +
                'hover:bg-cardHover'
            }
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faPen} size={'xs'} />
            {children}
        </button>
    );
};
