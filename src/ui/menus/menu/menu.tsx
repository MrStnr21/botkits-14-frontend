import { forwardRef } from 'react';
import cn from 'classnames';

import styles from './menu.module.scss';
import MenuItem from './menu-item/menu-item';
import type { Option } from '../../../utils/types';

export interface IMenu {
  /**
   * Набор полей меню, массив объектов формата `{label: string; value: string; icon?: string;}`
   */
  options: Option[];
  /**
   * callback при клике на элемент меню
   */
  onItemClick: (option: Option) => void;
  /**
   * Чтобы перезаписать свойства Menu, в scss файле родителя повысьте селективность,
   * например: ```div.dropdown { padding: 10px 0;}``` */
  layoutClassName?: string;
  /** Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  itemClassName?: string;
  /**
   * стилизация иконок в элементах меню
   */
  iconClassName?: string;
  /**
   * включить/выключить прокрутку в меню
   */
  isScroll?: boolean;
  /**
   * мультивыбор элементов меню
   */
  isMultiple?: boolean;
  /**
   * массив выбранных элементов
   */
  selectedValues?: string[];
}

type Ref = HTMLDivElement;

/**
 * Компонент для создания меню
 * @example
 * <Menu
 *   ref={menuRef}
 *   options={options}
 *   onItemClick={(e) => handleOptionClick(e.value)}
 *   layoutClassName={stylesCard.dropdown}
 *  />
 */
const Menu = forwardRef<Ref, IMenu>(
  (
    {
      options,
      onItemClick,
      layoutClassName = '',
      itemClassName = '',
      iconClassName = '',
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
              iconClass={iconClassName}
            />
          );
        })}
      </div>
    );
  }
);

export default Menu;
