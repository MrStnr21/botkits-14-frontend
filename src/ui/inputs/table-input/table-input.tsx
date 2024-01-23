/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ChangeEvent, useState } from 'react';
import styles from './table-input.module.scss';
import Typography from '../../typography/typography';

interface IProps {
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
}

const TableInput: FC<IProps> = ({
  value,
  placeholder,
  onChange,
  inputRef,
  handleBlur,
  min,
  max,
  isInvalid,
  minLength = 2,
  maxLength = 32,
  errorMessage = 'Error text',
}) => {
  const [error, setError] = useState<{ error: boolean; textError: string }>({
    error: false,
    textError: '',
  });

  const validate = (input: ChangeEvent<HTMLInputElement>) => {
    const inputValue = input.target.value.trim();
    console.log(inputValue);
    if (!inputValue) {
      setError({ error: true, textError: 'Это поле обязательно' });
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
      } else if (validityState.tooShort) {
        setError({
          error: true,
          textError: `Минимум ${minLength} символа`,
        });
      } else if (validityState.typeMismatch) {
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
