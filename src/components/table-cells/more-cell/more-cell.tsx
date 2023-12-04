import { FC, useRef, useState } from 'react';
import style from './more-cell.module.scss';
import MoreIcon from '../../icons/More/MoreIcon';
import Menu from '../../../ui/menus/menu/menu';

const MoreCell: FC = () => {
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

  return (
    <>
      <button className={style.button} type="button" onClick={handleClick}>
        <MoreIcon />
      </button>
      {isOpen && (
        <Menu
          ref={menuRef}
          options={mockData}
          onItemClick={() => setOpen(!isOpen)}
          layoutClassName={style.dropdown}
        />
      )}
    </>
  );
};

export default MoreCell;
