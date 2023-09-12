import { FC, useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IInputSelect {
  initValue: string[];
  defaultValue: string[];
  values: { nameValue: string; value: string }[];
  multiple?: boolean;
  handleFunction: (event: SelectChangeEvent<string[]>) => void;
}

const InputSelect: FC<IInputSelect> = ({
  initValue,
  values,
  defaultValue,
  handleFunction,
  multiple = false,
}) => {
  const [inputValues, setInputValues] = useState<string[]>([]);

  useEffect(() => {
    setInputValues(initValue);
  }, []);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setInputValues(typeof value === 'string' ? value.split(',') : value);
    handleFunction(event);
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        multiple={multiple}
        defaultValue={defaultValue}
        value={inputValues}
        IconComponent={undefined}
        onChange={handleChange}
      >
        {values.map(({ nameValue, value }) => (
          <MenuItem key={value} value={value}>
            {nameValue}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
