import { FC, useState, useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import MenuItem from '@mui/material/MenuItem';
import { StyledEngineProvider } from '@mui/styled-engine-sc';

import './input-select.module.scss';

interface IInputSelect {
  defaultValue: string[];
  values: { nameValue: string; value: string }[];
  multiple?: boolean;
  maxWidth: number;
  resetSelect?: boolean;
  handleFunction: (payload: string) => void;
}

const InputSelect: FC<IInputSelect> = ({
  values,
  defaultValue,
  handleFunction,
  multiple = false,
  resetSelect = false,
  maxWidth,
}): JSX.Element => {
  const [inputValues, setInputValues] = useState<string[]>([]);

  useEffect(() => {
    setInputValues(defaultValue);
  }, []);

  useEffect(() => {
    if (resetSelect) {
      setInputValues(defaultValue);
    }
  }, [resetSelect]);

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;
    setInputValues(typeof value === 'string' ? value.split(',') : value);
    handleFunction(typeof value === 'string' ? value : value.join(','));
  };

  return (
    <StyledEngineProvider injectFirst>
      <FormControl
        sx={{
          maxWidth: `${maxWidth}px`,
        }}
        fullWidth
      >
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          multiple={multiple}
          defaultValue={defaultValue.join()}
          value={multiple ? inputValues : inputValues.join()}
          onChange={handleChange}
          IconComponent={ArrowLeftIcon}
        >
          {values.map(({ nameValue, value }) => (
            <MenuItem key={value} value={value}>
              {nameValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default InputSelect;
