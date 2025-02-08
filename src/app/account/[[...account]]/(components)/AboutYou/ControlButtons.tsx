import { Button } from '@/components/ui/button';
import React from 'react';

export const ControlButtons: React.FC<{
    onSave: () => void;
    onCancel: () => void;
}> = ({ onSave, onCancel }) => {
    return (
        <div className={'flex gap-2 justify-start w-full'}>
            <Button onClick={onSave}>Save</Button>
            <Button variant={'outline'} onClick={onCancel}>
                Cancel
            </Button>
        </div>
    );
};
