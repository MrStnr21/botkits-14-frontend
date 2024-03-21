/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ChangeEvent, useState, useMemo } from 'react';
import styles from './table-input.module.scss';
import Typography from '../../../ui/typography/typography';
import { TableData } from '../../enhanced-table/enhanced-table';

interface IProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  handleBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  isInvalid?: boolean;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
  column?: string;
  data?: any;
}

const TableInput: FC<IProps> = ({
  name,
  value,
  placeholder,
  onChange,
  inputRef,
  handleBlur,
  min,
  max,
  isInvalid,
  minLength = 2,
  maxLength = 20,
  errorMessage = 'Error text',
  column,
  data,
}) => {
  const [error, setError] = useState<{ error: boolean; textError: string }>({
    error: false,
    textError: '',
  });

  const validate = (input: ChangeEvent<HTMLInputElement>) => {
    const inputValue = input.target.value.trim();
    const isPositiveInteger =
      /^\d+$/.test(inputValue) && parseInt(inputValue, 10) !== -1;
    const isPositiveIntegerMoreThanOne =
      /^\d+$/.test(inputValue) && parseInt(inputValue, 10) > 0;
    if (!inputValue) {
      setError({ error: true, textError: 'Это поле обязательно' });
    } else if (column === 'price' && !isPositiveInteger) {
      setError({ error: true, textError: 'Введите целое число > 0' });
    } else if (
      (column === 'botsCount' || column === 'subscribersCount') &&
      !isPositiveIntegerMoreThanOne
    ) {
      setError({ error: true, textError: 'Введите целое число > 1' });
    } else if (column === 'duration' && typeof inputValue !== 'string') {
      setError({ error: true, textError: 'Введите текст' });
    } else if (
      column === 'name' &&
      data.some((obj: any) => obj[column] === inputValue)
    ) {
      setError({ error: true, textError: 'Такой тариф существует' });
    } else {
      const validityState = input.currentTarget.validity;
      if (validityState.valueMissing) {
        setError({ error: true, textError: 'Это поле обязательно' });
      } else if (validityState.patternMismatch) {
        setError({ error: true, textError: errorMessage });
      } else if (validityState.tooLong) {
        setError({
          error: true,
          textError: `Максимум ${maxLength} символов`,
        });
      }
      //  else if (validityState.tooShort) {
      //   setError({
      //     error: true,
      //     textError: `Минимум ${minLength} символа`,
      //   });
      // }
      else if (validityState.typeMismatch) {
        setError({
          error: true,
          textError: 'Error text',
        });
      } else if (isInvalid) {
        setError({
          error: true,
          textError: errorMessage,
        });
      } else {
        setError({ error: false, textError: '' });
      }
      if (min && Number(input.target.value) < Number(min)) {
        input.target.value = min;
        if (input.target.value === '0') {
          input.target.value = '';
        }
      }
      if (max && Number(input.target.value) > Number(max)) {
        input.target.value = max;
      }
    }
    onChange(input);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={` ${styles.message} ${
          error.error || isInvalid ? styles.incorrect : ''
        }`}
      >
        <input
          name={name}
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={validate}
          onBlur={handleBlur}
          minLength={minLength}
          maxLength={maxLength}
        />
      </div>
      {(error.error || isInvalid) && (
        <Typography tag="p" className={styles.incorrect_text}>
          {error.textError}
        </Typography>
      )}
    </div>
  );
};

export default TableInput;
