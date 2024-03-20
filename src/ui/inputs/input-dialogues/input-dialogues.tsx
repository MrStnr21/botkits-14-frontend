import { FC, ChangeEvent, useState } from 'react';
import useEscapeKey from '../../../services/hooks/use-esc-key';
import useClick from '../../../services/hooks/use-click';
import Menu from '../../menus/menu/menu';
import { Option } from '../../../utils/types';
import styles from './input-dialogues.module.scss';
import Icon from '../../icon/icon';
import ButtonIcon from '../../buttons/button-icon/button-icon';

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

  const filters: Option[] = [
    {
      label: 'Cначала новые',
      value: 'newFirst',
    },
    {
      label: 'Сначала старые',
      value: 'oldFirst',
    },
    {
      label: 'Неотвеченные',
      value: 'unreplied',
    },
  ];

  const handleFilter = (option: Option) => {
    switch (option.value) {
      case 'newFirst':
      case 'oldFirst':
      case 'unreplied':
      default:
        break;
    }
  };

  return (
    <div className={styles.message}>
      {search && <Icon icon="search" extraClass={styles.search} isColored />}
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {iconVisible && (
        <ButtonIcon
          icon="settings"
          onClick={toggleIsOpenFilters}
          btnStyle={styles.settings}
          aria-label="Открыть фильтр сообщений"
        />
      )}
      {isOpenFilters && (
        <Menu
          options={filters}
          layoutClassName={styles.filters}
          onItemClick={handleFilter}
        />
      )}
    </div>
  );
};

export default InputDialogues;
