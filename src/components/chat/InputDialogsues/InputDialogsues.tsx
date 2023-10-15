import { FC, ChangeEvent } from 'react';
import stylesInput from './InputDialogsues.module.scss';
import FilterIcon from '../../icons/Filter/FilterIcon';

interface IInputDialogsues {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickFilter?: () => void;
}

const InputDialogsues: FC<IInputDialogsues> = ({
  value,
  placeholder = 'Поиск...',
  onChange,
  onClickFilter,
}): JSX.Element => {
  return (
    <div className={stylesInput.message}>
      <input
        className={stylesInput.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className={stylesInput.button}
        type="button"
        onClick={onClickFilter}
      >
        <FilterIcon />
      </button>
    </div>
  );
};

export default InputDialogsues;
