import { forwardRef } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import styles from './menu.module.scss';
import MenuItem from '../../menu-item/menu-item';

export interface IMenu {
  options: {
    label: string;
    value: string;
    icon?: string;
  }[];
  onItemClick: (value: string) => void;
  /** Чтобы перезаписать свойства Menu, в scss файле родителя повысьте селективность,
   * например: ```div.dropdown { padding: 10px 0;}``` */
  layoutClassName?: string;
  /** Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  itemClassName?: string;
  isScroll?: boolean;
  isMultiple?: boolean;
  selectedValues?: string[];
}

export type Ref = HTMLDivElement;

const Menu = forwardRef<Ref, IMenu>(
  (
    {
      options,
      onItemClick,
      layoutClassName = '',
      itemClassName = '',
      isScroll = false,
      isMultiple = false,
      selectedValues = [],
    },
    ref
  ) => {
    let containerCN = cn(styles.box, layoutClassName);

    if (isScroll) {
      containerCN += ` ${styles.scroll}`;
    }

    return (
      <div className={containerCN} ref={ref}>
        {options.map((option) => {
          return (
            <MenuItem
              key={uuidv4()}
              option={{ ...option }}
              onClick={() => onItemClick(option.value)}
              isChecked={isMultiple && selectedValues.includes(option.value)}
              extraClass={itemClassName}
            />
          );
        })}
      </div>
    );
  }
);

export default Menu;
