import { FC } from 'react';
import styles from './menu-item.module.scss';
import checkIcon from '../../images/icon/24x24/common/check.svg';

export interface IMenuItem {
  option: {
    value: string;
    label: string;
    icon?: string;
  };
  onClick: (value: string) => void;
  hasIcon?: boolean;
  isChecked?: boolean;
  /** Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  extraClass?: string;
}

const renderIcon = (hasIcon: boolean, icon: string | undefined) => {
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
  hasIcon = false,
  isChecked = false,
  extraClass = '',
}) => {
  return (
    <div
      key={option.value}
      onClick={() => onClick(option.value)}
      className={`${styles.item} ${extraClass}`}
    >
      {' '}
      {renderIcon(hasIcon, option.icon)}
      {option.label}
      {renderCheck(isChecked)}
    </div>
  );
};

export default MenuItem;
