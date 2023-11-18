import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';
import styles from './date-selector.module.scss';
import chevronIcon from '../../images/icon/16x16/common/chevron.svg';
import Menu from '../../ui/menus/menu/menu';

interface IDateSelect {
  defaultValue: string;
  options: {
    label: string;
    value: string;
  }[];
  handleSelect: (payload: string) => void;
}

const DateSelect: FC<IDateSelect> = ({
  defaultValue,
  options,
  handleSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    handleSelect(value);
    setIsOpen(false);
  };

  const findLabelByValue = (
    array: IDateSelect['options'],
    targetValue: string
  ): string => {
    const foundOption = options.find((option) => option.value === targetValue);
    return foundOption ? foundOption.label : '';
  };

  const shortenLabel = (label: string): string => {
    const match = label.match(/последние (\d+) дней/i);
    if (match && match[1]) {
      const numberOfDays = match[1];
      return `${numberOfDays} дней`;
    }

    return label;
  };

  const formatLabel = (
    array: IDateSelect['options'],
    targetValue: string
  ): string => shortenLabel(findLabelByValue(array, targetValue));

  return (
    <div className={styles.container}>
      <button onClick={toggleDropdown} type="button" className={styles.button}>
        <span className={styles.text}>
          {formatLabel(options, selectedValue)}
        </span>
        <ReactSVG
          src={chevronIcon}
          className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
        />
      </button>
      {isOpen && (
        <Menu
          options={options}
          layoutClassName={styles.dropdown}
          onItemClick={handleOptionClick}
        />
      )}
    </div>
  );
};

export default DateSelect;
