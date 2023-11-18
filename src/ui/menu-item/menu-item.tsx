import { FC } from 'react';
import styles from './menu-item.module.scss';
import checkIcon from '../../images/icon/24x24/common/check.svg';

export interface IMenuItem {
  option: {
    value: string;
    label: string;
  };
  onClick: (value: string) => void;
  icon?: string | undefined;
  isChecked?: boolean;
}

const renderIcon = (icon: string | undefined) => {
  if (icon) {
    return <img src={icon} alt="" className={styles.icon} />;
  }
  return null;
};

const renderCheck = (isChecked: boolean) => {
  if (isChecked) {
    return <img src={checkIcon} alt="" className={styles.check} />;
  }
  return null;
};

const MenuItem: FC<IMenuItem> = ({
  option,
  onClick,
  icon,
  isChecked = false,
}) => {
  return (
    <div
      key={option.value}
      onClick={() => onClick(option.value)}
      className={styles.item}
    >
      {' '}
      {renderIcon(icon)}
      {option.label}
      {renderCheck(isChecked)}
    </div>
  );
};

export default MenuItem;
