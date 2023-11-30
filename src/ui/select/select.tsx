import React, { FC, useRef, useState, useMemo, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import styles from './select.module.scss';
import Menu from '../menus/menu/menu';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import { Option } from '../../utils/types';
import ChevronIcon from '../../components/icons/Chevron/ChevronIcon';

type ElementListener = 'document' | 'flow';

export interface ISelect {
  currentOption?: Option | string | null;
  options?: Option[] | string[];
  handleSelect?: (option: Option) => void;
  placeholder?: string;
  buttonStyle?: React.CSSProperties;
  elementToCloseListener?: ElementListener;
  adaptive?: boolean;
  layoutClassName?: string;
  itemClassName?: string;
  isScroll?: boolean;
  toggleSelect?: () => void;
  closeSelect?: () => void;
}

const Select: FC<ISelect> = ({
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
  toggleSelect,
  closeSelect,
}) => {
  const formatedOptions = useMemo(
    () =>
      options &&
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

  const toggleDropdown =
    toggleSelect ||
    (() => {
      setIsOpen(!isOpen);
    });

  const closeDropdown =
    closeSelect ||
    (() => {
      setIsOpen(false);
    });

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
