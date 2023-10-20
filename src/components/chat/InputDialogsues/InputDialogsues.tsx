import { FC, ChangeEvent, useState } from 'react';
import stylesInput from './InputDialogsues.module.scss';
import FilterIcon from '../../icons/Filter/FilterIcon';
import SearchFilters from '../SearchFilters/SearchFilters';

interface IInputDialogsues {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputDialogsues: FC<IInputDialogsues> = ({
  value,
  placeholder = 'Поиск...',
  onChange,
}): JSX.Element => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const toggleIsOpenFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

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
        onClick={toggleIsOpenFilters}
      >
        <FilterIcon />
      </button>
      <SearchFilters active={isOpenFilters} />
    </div>
  );
};

export default InputDialogsues;
