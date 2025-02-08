import React, { Dispatch, SetStateAction, useState } from 'react';
import { Autocomplete, Chip } from '@mui/material';
import { ControlButtons } from './ControlButtons';
import { Input } from '@/components/ui/input';

type Option = {
    label: string;
    value: string;
};
const options: Option[] = [
    {
        label: 'Powerlifting',
        value: 'powerlifting',
    },
    {
        label: 'Weightlifting',
        value: 'weightlifting',
    },
];

export const PrimaryInterestEdit: React.FC<{
    setIsEditing: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsEditing }) => {
    const [currentValues, setCurrentValues] = useState<string[]>([]);
    const [maxNumberOfInterestsReached, setMaxNumberOfInterestsReached] =
        useState(false);

    return (
        <div className={'flex flex-col gap-4'}>
            <Autocomplete
                multiple
                sx={{
                    maxWidth: '30rem',
                }}
                id="tags-filled"
                options={options
                    .map((option) => option.value)
                    .filter(
                        (opt) =>
                            !currentValues.some(
                                (currentVal) => currentVal === opt
                            )
                    )}
                renderOption={(props, option) => {
                    return (
                        <li {...props}>
                            {options.find((opt) => opt.value === option)
                                ?.label ?? ''}
                        </li>
                    );
                }}
                value={currentValues}
                freeSolo
                onChange={(_, value) => {
                    const newValue = value.filter(
                        (val, index, list) =>
                            list.findIndex(
                                (el) => el.toLowerCase() === val.toLowerCase()
                            ) === index
                    );
                    if (newValue.length < 10) {
                        setCurrentValues(newValue);
                    } else {
                        setMaxNumberOfInterestsReached(true);
                    }
                }}
                renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                        <Chip
                            variant="outlined"
                            label={
                                options.find(
                                    (opt) => opt.value === option.toLowerCase()
                                )?.label ?? option
                            }
                            {...getTagProps({ index })}
                            key={option}
                        />
                    ))
                }
                renderInput={(params) => (
                    <Input
                        {...params.inputProps}
                        id={params.id}
                        disabled={params.disabled}
                        placeholder="Your primary workout purpose or interest"
                        className={maxNumberOfInterestsReached ? '' : ''}
                        helperText={
                            maxNumberOfInterestsReached
                                ? 'Reached maximum number of values'
                                : ''
                        }
                    />
                )}
            />
            <ControlButtons
                onSave={(): void => setIsEditing(false)}
                onCancel={(): void => setIsEditing(false)}
            />
        </div>
    );
};
