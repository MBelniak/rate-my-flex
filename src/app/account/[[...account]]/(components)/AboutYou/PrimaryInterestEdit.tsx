import React, { Dispatch, SetStateAction, useState } from 'react';
import { Section } from '@/app/account/[[...account]]/(components)/Section';
import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { Button } from '@nextui-org/react';

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
                        <Box {...props}>
                            {options.find((opt) => opt.value === option).label}
                        </Box>
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
                    <TextField
                        {...params}
                        variant="filled"
                        placeholder="You primary workout purpose or interest"
                        error={maxNumberOfInterestsReached}
                        helperText={
                            maxNumberOfInterestsReached
                                ? 'Reached maximum number of values'
                                : ''
                        }
                    />
                )}
            />
            <div className={'flex flex-row-reverse gap-2 content-end w-full'}>
                <Button
                    color="primary"
                    variant={'solid'}
                    className={'uppercase'}
                >
                    Save
                </Button>
                <Button
                    color="primary"
                    variant={'light'}
                    className={'uppercase'}
                    onClick={() => setIsEditing(false)}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};
