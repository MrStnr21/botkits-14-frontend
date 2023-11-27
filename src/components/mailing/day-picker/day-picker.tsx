import { FC } from 'react';
import { Option } from '../../../utils/types';
import styles from './day-picker.module.scss';
import DayButton from './day-button/day-button';

type TDayPicker = {
  buttons: Option[];
  active: Option[];
  setValue: (value: Option) => void;
};

const DayPicker: FC<TDayPicker> = ({ buttons, active, setValue }) => {
  const buttonElements = buttons.map((button) => {
    const isActive =
      active.findIndex((item) => item.value === button.value) !== -1;
    return (
      <DayButton
        option={button}
        setValue={setValue}
        isActive={isActive}
        key={button.value}
      />
    );
  });
  return <div className={styles.container}>{buttonElements}</div>;
};

export default DayPicker;
