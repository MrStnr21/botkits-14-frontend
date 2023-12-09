import { FC } from 'react';
import { Option } from '../../../../utils/types';
import styles from './day-button.module.scss';

type TDayButtonProps = {
  option: Option;
  setValue: (value: Option) => void;
  isActive?: boolean;
};

const DayButton: FC<TDayButtonProps> = ({ option, setValue, isActive }) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.button_active : ''}`}
      type="button"
      onClick={() => setValue(option)}
    >
      {option.label}
    </button>
  );
};

export default DayButton;
