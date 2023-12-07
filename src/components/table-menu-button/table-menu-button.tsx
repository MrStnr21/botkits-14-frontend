import { FC, useRef, useState } from 'react';
import MoreIcon from '../icons/More/MoreIcon';
import Menu from '../../ui/menus/menu/menu';
import { Option } from '../../utils/types';
import style from './table-menu-button.module.scss';

interface IProps {
  onRemove?: () => void;
}

const TableMenuButton: FC<IProps> = ({ onRemove }) => {
  const mockData = [
    { label: 'Удалить', value: 'del' },
    { label: 'Дополнительно', value: 'adv' },
  ];

  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(!isOpen);
  };

  const onItemClick = (option: Option) => {
    setOpen(false);
    if (option.value === 'del' && onRemove) {
      onRemove();
    }
  };

  return (
    <td className={style.cell}>
      <button className={style.button} type="button" onClick={handleClick}>
        <MoreIcon />
      </button>
      {isOpen && (
        <Menu
          ref={menuRef}
          options={mockData}
          onItemClick={onItemClick}
          layoutClassName={style.dropdown}
        />
      )}
    </td>
  );
};

export default TableMenuButton;
