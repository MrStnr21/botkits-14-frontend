import { FC, useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material';
import './input-select.module.scss';
import { ArrowLeftIcon } from '@mui/x-date-pickers';

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
}) => {
  const [inputValues, setInputValues] = useState<string[]>([]);

  useEffect(() => {
    setInputValues(defaultValue);
  }, []);

  useEffect(() => {
    if (resetSelect) {
      setInputValues(defaultValue);
    }
  }, [resetSelect]);

  const inputSelectTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans, sans-serif',
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: '0px 6px 16px 0px rgba(21, 18, 51, 0.08)',
          },
        },
      },
    },
  });

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const {
      target: { value },
    } = event;
    setInputValues(typeof value === 'string' ? value.split(',') : value);
    handleFunction(typeof value === 'string' ? value : value.join(','));
  };

  return (
    <ThemeProvider theme={inputSelectTheme}>
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
          sx={{
            backgroundColor: '#F2F4F8',
            fontSize: '13px',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: '150%',
            letterSpacing: '0.3px',
            color: '#060C23',
            textTransform: 'capitalize',
            paddingTop: '10px',
            paddingLeft: '8px',
            paddingBottom: '10px',
            maxHeight: '40px',
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '.MuiOutlinedInput-input': {
              padding: 0,
            },
            '.MuiSelect-icon': {
              maxWidth: '16px',
              transform: 'rotate(-90deg)',
            },
          }}
        >
          {values.map(({ nameValue, value }) => (
            <MenuItem
              key={value}
              value={value}
              sx={{
                '&:focus': {
                  backgroundColor: '#F2F4F8',
                },
                '&.Mui-selected': {
                  backgroundColor: '#F2F4F8',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#F2F4F8',
                },
                '&.MuiMenuItem-root': {
                  fontSize: '13px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '150%',
                  letterSpacing: '0.3px',
                  color: '#060C23',
                  textTransform: 'capitalize',
                  maxHeight: '37px',
                  paddingTop: '9px',
                  paddingLeft: '16px',
                  paddingBottom: '8px',
                },
              }}
            >
              {nameValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default InputSelect;
