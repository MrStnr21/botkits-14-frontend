import { FC, useRef, useState } from 'react';
import Typography from '../../ui/typography/typography';
import styles from './table-header.module.scss';
import ChevronIcon from '../icons/Chevron/ChevronIcon';
import Menu from '../../ui/menus/menu/menu';
import { Option } from '../../utils/types';

interface IProps {
  title: string;
  onFilterChange?: (value: string) => void;
}

const mockData = [
  { label: 'Все', value: 'all' },
  { label: 'Активные', value: 'active' },
  { label: 'Неактивные', value: 'inactive' },
];

const EnhancedTableHeader: FC<IProps> = ({ title, onFilterChange }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Option>({
    label: 'Все',
    value: 'all',
  });
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
        <ChevronIcon color="#8392AB" width={26} height={26} />
      </button>
      {isOpen && (
        <Menu
          ref={menuRef}
          options={mockData}
          onItemClick={onItemClick}
          layoutClassName={styles.dropdown}
        />
      )}
    </div>
  );
};

export default EnhancedTableHeader;