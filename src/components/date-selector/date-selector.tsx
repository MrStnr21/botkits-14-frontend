import { FC, useRef, useState } from 'react';
import styles from './date-selector.module.scss';
import Menu from '../../ui/menus/menu/menu';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import PeriodSelectButton from '../../ui/buttons/period-select-button/period-select-button';
import type { Option } from '../../utils/types';

export interface IDateSelect {
  currentOption: Option;
  options: Option[];
  handleSelect: (option: Option) => void;
}

const DateSelect: FC<IDateSelect> = ({
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
      <PeriodSelectButton
        ref={buttonRef}
        option={selectedOption}
        isOpen={isOpen}
        onClick={toggleDropdown}
        formatLabel={shortenLabel}
      />
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
