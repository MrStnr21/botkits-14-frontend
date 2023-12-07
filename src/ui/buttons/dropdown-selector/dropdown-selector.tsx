/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useRef, useState } from 'react';
import style from './dropdown-selector.module.scss';
import ExportIcon from '../../../components/icons/Export/ExportIcon';
import DoubleChevronIcon from '../../../components/icons/DoubleChevron/DoubleChevron';
import NewFilterIcon from '../../../components/icons/NewFilterIcon/NewFilterIcon';
import Menu from '../../menus/menu/menu';

export interface IProps {
  onClick: () => void;
  text: string;
  open?: boolean;
  exportIcon?: boolean;
  chevronIcon?: boolean;
  filterIcon?: boolean;
}

const mockData = [
  { label: 'Option one', value: 'one' },
  { label: 'Option two', value: 'two' },
  { label: 'Option three', value: 'three' },
];

const DropdownSelectorButton: FC<IProps> = ({
  onClick,
  text,
  open,
  exportIcon,
  chevronIcon,
  filterIcon,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setMenuOpen(!isMenuOpen);
    onClick();
  };

  const onItemClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <button onClick={handleButtonClick} type="button" className={style.button}>
      <span className={style.text}>{text}</span>
      <div className={`${style.icon} ${open ? style.rotated : ''}`}>
        {exportIcon && <ExportIcon width={24} height={24} />}
        {chevronIcon && <DoubleChevronIcon width={24} height={24} />}
        {filterIcon && <NewFilterIcon width={24} height={24} />}
      </div>
      {isMenuOpen && (
        <Menu
          ref={menuRef}
          options={mockData}
          onItemClick={onItemClick}
          layoutClassName={style.dropdown}
        />
      )}
    </button>
  );
};

export default DropdownSelectorButton;
