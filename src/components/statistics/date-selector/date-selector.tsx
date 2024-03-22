import { FC, useRef, useState } from 'react';
import styles from './date-selector.module.scss';
import Menu from '../../../ui/menus/menu/menu';
import useOutsideClickAndEscape from '../../../utils/hooks/useOutsideClickAndEscape';
import type { Option } from '../../../utils/types';
import ButtonBasic from '../../../ui/buttons/button-basic/button-basic';

export interface IDateSelector {
  currentOption: Option;
  options: Option[];
  handleSelect: (option: Option) => void;
}

const DateSelect: FC<IDateSelector> = ({
  currentOption,
  options,
  handleSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(currentOption);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      setIsOpen(false);
    },
    buttonRef
  );

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    handleSelect(option);
    setIsOpen(false);
  };

  const shortenLabel = (label: string): string => {
    const match = label.match(/последние (\d+) дней/i);
    if (match && match[1]) {
      const numberOfDays = match[1];
      return `${numberOfDays} дней`;
    }

    return label;
  };

  return (
    <div className={styles.container}>
      <ButtonBasic
        icon="chevronDown"
        iconType="right"
        ref={buttonRef}
        onClick={toggleDropdown}
        btnStyle={`${styles.button} ${isOpen ? styles.rotated : ''}`}
        isIconColored
      >
        {shortenLabel(selectedOption.label)}
      </ButtonBasic>
      {isOpen && (
        <Menu
          ref={menuRef}
          options={options}
          onItemClick={handleOptionClick}
          layoutClassName={styles.dropdown}
        />
      )}
    </div>
  );
};

export default DateSelect;
