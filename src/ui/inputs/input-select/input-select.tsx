import { FC, useState, useEffect, useRef } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import MenuItem from '@mui/material/MenuItem';
import useScrollbar from '../../../services/hooks/use-scrollbar';
import 'overlayscrollbars/overlayscrollbars.css';
import styles from './input-select.module.scss';
import Typography from '../../typography/typography';

interface IInputSelect {
  defaultValue: string[];
  values: {
    nameValue: string;
    value: string;
    isIcon?: boolean;
    iconDescription?: string;
  }[];
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
  const [visible, setVisible] = useState<boolean>(false);

  const refI = useRef(null);

  let timeOutOpenModal: NodeJS.Timeout | string = '';

  useScrollbar(refI, visible);

  useEffect(() => {
    return () => {
      clearTimeout(timeOutOpenModal);
    };
  }, []);

  useEffect(() => {
    setInputValues(defaultValue);
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
        onOpen={() => {
          timeOutOpenModal = setTimeout(() => setVisible(true), 0);
        }}
        onClose={() => {
          setVisible(false);
          clearTimeout(timeOutOpenModal);
        }}
        IconComponent={ArrowLeftIcon}
        renderValue={(selected) => {
          if (Array.isArray(selected)) {
            return selected
              .map((selectedItem) => {
                return values.find((curItem) => curItem.value === selectedItem)
                  ?.nameValue;
              })
              .join(', ');
          }
          const item = values.find((curItem) => curItem.value === selected);
          if (!item) {
            return null;
          }
          return item.isIcon ? (
            <img className={styles.chosen} src={item.nameValue} alt="icon" />
          ) : (
            item.nameValue
          );
        }}
        MenuProps={{
          slotProps: {
            paper: {
              ref: refI,
            },
          },
        }}
      >
        {' '}
        {values?.map(({ nameValue, value, isIcon, iconDescription }) => (
          <MenuItem key={value} value={value}>
            {isIcon ? (
              <div className={styles.optionContainer}>
                <img src={nameValue} alt="icon" />{' '}
                <Typography tag="span" font="OpenSans">
                  {iconDescription}
                </Typography>
              </div>
            ) : (
              nameValue
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
