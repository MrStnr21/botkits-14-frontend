import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './menu.module.scss';
import MenuItem from '../../menu-item/menu-item';
import type { Option } from '../../../utils/types';

export interface IMenu {
  options: Option[];
  onItemClick: (option: Option) => void;
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

type Ref = HTMLDivElement;

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
        {options.map((option, index) => {
          return (
            <MenuItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              option={{ ...option }}
              onClick={() => onItemClick(option)}
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
