import { FC, ChangeEvent } from 'react';
import styles from './table-input.module.scss';

interface IProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>; // Добавлен новый пропс inputRef
}

const TableInput: FC<IProps> = ({ value, placeholder, onChange, inputRef }) => {
  return (
    <div className={styles.message}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TableInput;
