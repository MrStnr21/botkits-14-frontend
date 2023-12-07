import { FC, useRef, useState } from 'react';
import style from './more-cell.module.scss';
import MoreIcon from '../../icons/More/MoreIcon';
import Menu from '../../../ui/menus/menu/menu';
import { Option } from '../../../utils/types';

interface IProps {
  onRemove?: () => void;
}

const MoreCell: FC<IProps> = ({ onRemove }) => {
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
    <>
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
    </>
  );
};

export default MoreCell;
