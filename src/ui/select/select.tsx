import React, { FC, useRef, useState, useMemo, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import styles from './select.module.scss';
import Menu from '../menus/menu/menu';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import { Option } from '../../utils/types';
import ChevronIcon from '../../components/icons/Chevron/ChevronIcon';

type ElementListener = 'document' | 'flow';

export interface IMailingSelect {
  /**
   * текущая выбранная опция. Принимает объект Option или string
   */
  currentOption?: Option | string | null;
  /**
   * * Набор полей меню, массив объектов формата `{label: string; value: string; icon?: string;}`
   */
  options: Option[] | string[];
  /**
   * callback при клике на элемент select
   */
  handleSelect?: (option: Option) => void;
  placeholder?: string;
  /**
   * `style` проп для кнопки открытия выпадающего списка
   */
  buttonStyle?: React.CSSProperties;
  /**
   * строка, описывающая элемент, на который вешаеся слушатель закрытия select по клику. На текущий момент принимает `'document' | 'flow'`
   */
  elementToCloseListener?: ElementListener;
  /**
   * должен ли элемент быть адаптивным
   */
  adaptive?: boolean;
  /**
   * className для контейнера выпадающего меню
   */
  layoutClassName?: string;
  /**
   * className для элемента выпадающего меню
   */
  itemClassName?: string;
  /**
   * включить/выключить прокрутку в меню
   */
  isScroll?: boolean;
}

/**
 * Более-менее универсальный компонент для задания селекта
 * @example
 * <Select
    options={selectValues}
    handleSelect={(option) => setVariable(option.value)}
    currentOption={getSelectItemByValue(
     itemFromVariables.variable,
       selectValues
      )}
    elementToCloseListener="flow"
    adaptive
   />
 */
const Select: FC<IMailingSelect> = ({
  currentOption,
  options,
  handleSelect,
  placeholder,
  buttonStyle,
  elementToCloseListener,
  adaptive,
  isScroll,
  layoutClassName,
  itemClassName,
}) => {
  const formatedOptions = useMemo(
    () =>
      options.map((option) => {
        if (typeof option === 'string') {
          return { value: option, label: option };
        }
        return option;
      }),
    [options]
  );
  const formatedOption =
    typeof currentOption === 'string'
      ? { label: currentOption, value: currentOption }
      : currentOption;
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 620px)');

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getListenerElement = useCallback(() => {
    switch (elementToCloseListener) {
      case 'flow': {
        return document.querySelector('.react-flow__pane') || document;
      }
      default: {
        return document;
      }
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useOutsideClickAndEscape(
    menuRef,
    getListenerElement(),
    closeDropdown,
    buttonRef
  );

  const handleOptionClick = handleSelect
    ? (option: Option) => {
        handleSelect(option);
        setIsOpen(false);
      }
    : () => {};

  return (
    <button
      ref={buttonRef}
      onClick={toggleDropdown}
      type="button"
      className={`${styles.container} ${
        adaptive ? styles.container_adaptive : ''
      }`}
      style={buttonStyle}
    >
      {formatedOption && !formatedOption.icon && (
        <span className={styles.label}>{formatedOption.label}</span>
      )}
      {!formatedOption && (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
      {formatedOption && formatedOption.icon && (
        <img className={styles.icon} src={formatedOption.icon} alt="icon" />
      )}
      <span
        className={`${styles.chevron} ${
          isOpen ? styles.chevron_opened : styles.chevron_closed
        }`}
      >
        <ChevronIcon
          strokeWidth={1.5}
          width={isMobile && adaptive ? 9 : 16}
          height={isMobile && adaptive ? 9 : 16}
          color={currentOption ? '#060C23' : '#BFC9D9'}
        />
      </span>
      {isOpen && formatedOptions && (
        <Menu
          ref={menuRef}
          options={formatedOptions}
          onItemClick={handleOptionClick}
          layoutClassName={`${styles.dropdown} ${layoutClassName || ''}`}
          itemClassName={itemClassName}
          isScroll={isScroll}
        />
      )}
    </button>
  );
};

export default Select;
