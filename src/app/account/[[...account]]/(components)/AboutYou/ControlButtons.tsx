import React from 'react';
import { Button } from '@nextui-org/react';

export const ControlButtons: React.FC<{
    onSave: () => void;
    onCancel: () => void;
}> = ({ onSave, onCancel }) => {
    return (
        <div className={'flex gap-2 justify-start w-full'}>
            <Button
                color="primary"
                variant={'solid'}
                className={
                    'uppercase data-[hover=true]:bg-primaryHover data-[hover=true]:opacity-100'
                }
                onClick={onSave}
            >
                Save
            </Button>
            <Button
                color="primary"
                variant={'light'}
                className={
                    'uppercase data-[hover=true]:bg-primaryBackgroundHover'
                }
                onClick={onCancel}
            >
                Cancel
            </Button>
        </div>
    );
};
