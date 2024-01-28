/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useRef, useState } from 'react';
import Typography from '../../ui/typography/typography';
import styles from './table-header.module.scss';
import ChevronIcon from '../icons/Chevron/ChevronIcon';
import Menu from '../../ui/menus/menu/menu';
import { Option } from '../../utils/types';

interface IProps {
  // название таблицы в шапке
  title?: string;
  // функция, принимающая значение для фильтрации строк в таблицы из её шапки
  onFilterChange?: (value: string) => void;
  // массив опций, на основе которых будет происходит фильтрация строк
  options?: { label: string; value: string }[];
}

const EnhancedTableHeader: FC<IProps> = ({
  title,
  onFilterChange,
  options = [],
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Option>(
    options[0] || { label: 'Все', value: 'all' }
  );
  const menuRef = useRef<HTMLDivElement>(null);

  const onItemClick = (option: Option) => {
    const value = option.value as string;
    setSelectedValue(option);
    setOpen(false);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <div className={styles.div} onClick={() => setOpen(!isOpen)}>
      <Typography tag="h3">{title}</Typography>
      <button type="button" className={styles.button}>
        {selectedValue.label}
        <ChevronIcon
          color="#8392AB"
          width={26}
          height={26}
          position={isOpen ? 'up' : 'down'}
        />
      </button>
      {isOpen && (
        <Menu
          ref={menuRef}
          options={options}
          onItemClick={onItemClick}
          layoutClassName={styles.dropdown}
        />
      )}
    </div>
  );
};

export default EnhancedTableHeader;
