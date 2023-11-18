import { FC } from 'react';
import cn from 'classnames';

import styles from './menu.module.scss';
import MenuItem from '../../menu-item/menu-item';

export interface IMenu {
  options: {
    label: string;
    value: string;
  }[];
  isScroll?: boolean;
  size?: 'small' | 'medium' | 'chat' | 'default' | 'large';
  layoutClassName?: string;
  onItemClick: (value: string) => void;
  isMultiple?: boolean;
  selectedValues?: string[];
}

const Menu: FC<IMenu> = ({
  options,
  isScroll = false,
  size = 'default',
  layoutClassName,
  onItemClick,
  isMultiple = false,
  selectedValues = [],
}) => {
  let containerCN = cn(styles.box, styles[size], layoutClassName);

  if (isScroll) {
    containerCN += ` ${styles.scroll}`;
  }

  return (
    <div className={containerCN}>
      {options.map((option) => {
        return (
          <MenuItem
            key={option.value}
            option={{ ...option }}
            onClick={() => onItemClick(option.value)}
            isChecked={isMultiple && selectedValues.includes(option.value)}
          />
        );
      })}
    </div>
  );
};

export default Menu;
