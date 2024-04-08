import React, { Dispatch, SetStateAction, useState } from 'react';
import { FormControl } from '@mui/material';
import { ControlButtons } from '@/app/account/[[...account]]/(components)/AboutYou/ControlButtons';
import { DatePicker } from '@mui/x-date-pickers';

export const DateOfBirthEdit: React.FC<{
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsEditing }) => {
    const [value, setValue] = useState<Date | null>(null);

    return (
        <div className={'flex flex-col gap-4'}>
            <FormControl
                variant="standard"
                sx={{ maxWidth: '200px', minWidth: '120px' }}
            >
                <DatePicker
                    disableFuture
                    value={value}
                    onChange={(newValue): void => setValue(newValue)}
                    sx={{
                        fontSize: '0.8125rem',
                    }}
                />
            </FormControl>
            <ControlButtons
                onCancel={(): void => setIsEditing(false)}
                onSave={(): void => setIsEditing(false)}
            />
        </div>
    );
};
