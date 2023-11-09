import { FC, ChangeEvent, useState } from 'react';
import stylesInput from './input-dialogues.module.scss';
import FilterIcon from '../../../components/icons/Filter/FilterIcon';
import SearchFilters from '../../../components/chat/SearchFilters/SearchFilters';

interface IInputDialogsues {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  iconVisible?: boolean;
}

const InputDialogsues: FC<IInputDialogsues> = ({
  value,
  placeholder = 'Поиск...',
  onChange,
  iconVisible = false,
}) => {
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
        {iconVisible && <FilterIcon />}
      </button>
      <SearchFilters active={isOpenFilters} />
    </div>
  );
};

export default InputDialogsues;
