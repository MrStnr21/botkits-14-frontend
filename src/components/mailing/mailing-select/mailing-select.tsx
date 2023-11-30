import { FC, useRef, useState } from 'react';
import styles from './mailing-select.module.scss';
import Menu from '../../../ui/menus/menu/menu';
import useOutsideClickAndEscape from '../../../utils/hooks/useOutsideClickAndEscape';
import { Option } from '../../../utils/types';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';

export interface IMailingSelect {
  currentOption: Option | null;
  options?: Option[];
  handleSelect?: (option: Option) => void;
  placeholder?: string;
  toggleSelect?: () => void;
  closeSelect?: () => void;
  maxWidth?: number;
}

const MailingSelect: FC<IMailingSelect> = ({
  currentOption,
  options,
  handleSelect,
  placeholder,
  toggleSelect,
  closeSelect,
  maxWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(currentOption);

  console.log(currentOption);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

  useOutsideClickAndEscape(menuRef, document, closeDropdown, buttonRef);

  const handleOptionClick = handleSelect
    ? (option: Option) => {
        setSelectedOption(option);
        handleSelect(option);
        setIsOpen(false);
      }
    : () => {};

  const buttonStyle = maxWidth
    ? {
        maxWidth: `${maxWidth}px`,
      }
    : {};

  return (
    <button
      ref={buttonRef}
      onClick={toggleDropdown}
      type="button"
      className={styles.container}
      style={buttonStyle}
    >
      {(selectedOption || currentOption) && (
        <span className={styles.label}>
          {options ? selectedOption!.label : currentOption?.label}
        </span>
      )}
      {!selectedOption && !currentOption && (
        <span className={styles.placeholder}>{placeholder}</span>
      )}
      <span
        className={`${styles.chevron} ${
          isOpen ? styles.chevron_opened : styles.chevron_closed
        }`}
      >
        <ChevronIcon
          strokeWidth={1.5}
          width={16}
          height={16}
          color={currentOption ? '#060C23' : '#BFC9D9'}
        />
      </span>
      {isOpen && options && (
        <Menu
          ref={menuRef}
          options={options}
          onItemClick={handleOptionClick}
          layoutClassName={styles.dropdown}
        />
      )}
    </button>
  );
};

export default MailingSelect;
