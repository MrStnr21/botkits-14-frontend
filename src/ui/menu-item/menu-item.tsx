import { FC } from 'react';
import styles from './menu-item.module.scss';
import checkIcon from '../../images/icon/24x24/common/check.svg';
import { Option } from '../../utils/types';

export interface IMenuItem {
  option: Option;
  onClick: (value: string) => void;
  /**
   * выбран ли элемент при включенном мультивыборе
   */
  isChecked?: boolean;
  /** Чтобы перезаписать свойства MenuItem, в scss файле родителя повысьте селективность,
   * например: ```div.item { height: 30px;}``` */
  extraClass?: string;
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
      {renderIcon(option.icon)}
      {option.label}
      {renderCheck(isChecked)}
    </div>
  );
};

export default MenuItem;
