import { FC, ChangeEvent, useState } from 'react';
import stylesInput from './input-dialogues.module.scss';
import FilterIcon from '../../../components/icons/Filter/FilterIcon';
import SearchFilters from '../../../components/chat/SearchFilters/SearchFilters';
import useEscapeKey from '../../../services/hooks/use-esc-key';
import useClick from '../../../services/hooks/use-click';
import SearchIcon from '../../../components/icons/Search/SearchIcon';

interface IInputDialogues {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  iconVisible?: boolean;
  search?: boolean;
}

const InputDialogues: FC<IInputDialogues> = ({
  value,
  placeholder = 'Поиск...',
  onChange,
  iconVisible = false,
  search = false,
}) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const toggleIsOpenFilters = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  useEscapeKey(() => setIsOpenFilters(false));
  useClick(() => setIsOpenFilters(false), 'inputDialoguesButton');

  return (
    <div className={stylesInput.message}>
      {search && <SearchIcon />}
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
        id="inputDialoguesButton"
      >
        {iconVisible && <FilterIcon />}
      </button>
      <SearchFilters active={isOpenFilters} />
    </div>
  );
};

export default InputDialogues;
