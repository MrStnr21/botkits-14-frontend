import { FC, useRef, useState } from 'react';
import MoreIcon from '../icons/More/MoreIcon';
import Menu from '../../ui/menus/menu/menu';
import { Option } from '../../utils/types';
import style from './table-menu-button.module.scss';

interface IProps {
  onRemove?: () => void;
  options?: { label: string; value: string }[];
}

const TableMenuButton: FC<IProps> = ({ onRemove, options = [] }) => {
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
          options={options}
          onItemClick={onItemClick}
          layoutClassName={style.dropdown}
        />
      )}
    </td>
  );
};

export default TableMenuButton;
