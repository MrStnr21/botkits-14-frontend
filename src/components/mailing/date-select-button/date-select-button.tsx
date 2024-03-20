/* eslint-disable no-param-reassign */
import { FC } from 'react';
import styles from './date-select-button.module.scss';
import Icon from '../../../ui/icon/icon';

type TProps = {
  value: string;
  isOpened: boolean;
  onClick: () => void;
  adaptive?: boolean;
};

const DateSelectButton: FC<TProps> = ({
  value,
  isOpened,
  onClick,
  adaptive,
}) => {
  const addChevronClassNames = (basicStyle: string) => {
    if (isOpened) {
      basicStyle += ` ${styles.is_opened}`;
    }
    if (value) {
      basicStyle += ` ${styles.colored}`;
    }
    return basicStyle;
  };

  const buttonClass = `${styles.button} ${adaptive ? styles.adaptive : ''}`;
  return (
    <button className={buttonClass} type="button" onClick={onClick}>
      <span className={styles.label}>{value}</span>
      <Icon
        icon="chevronDown"
        extraClass={addChevronClassNames(styles.chevron)}
        isColored
      />
    </button>
  );
};

export default DateSelectButton;
