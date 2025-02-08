import React, { Dispatch, SetStateAction, useState } from 'react';
import { ControlButtons } from '@/app/account/[[...account]]/(components)/AboutYou/ControlButtons';
import { DatePicker } from '@/components/ui/datepicker';

export const DateOfBirthEdit: React.FC<{
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsEditing }) => {
    const [value, setValue] = useState<Date | undefined>(undefined);

    return (
        <div className={'flex flex-col gap-4'}>
            <DatePicker
                selected={value}
                onSelect={(newValue): void => setValue(newValue)}
            />
            <ControlButtons
                onCancel={(): void => setIsEditing(false)}
                onSave={(): void => setIsEditing(false)}
            />
        </div>
    );
};
