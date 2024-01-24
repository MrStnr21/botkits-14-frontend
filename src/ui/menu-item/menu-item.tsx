import { FC } from 'react';
import styles from './menu-item.module.scss';
import checkIcon from '../../images/icon/24x24/common/check.svg';
import { Option } from '../../utils/types';
import Icon from '../icon/icon';
import { IconName } from '../icon/utils';

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
  iconClass?: string;
}

const renderIcon = (icon: IconName | undefined, style: string) => {
  if (icon) {
    return (
      <Icon icon={icon} extraClass={`${styles.icon} ${style}`} isColored />
    );
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
  iconClass = '',
}) => {
  return (
    <div
      key={option.value}
      onClick={() => onClick(option.value)}
      className={`${styles.item} ${extraClass}`}
    >
      {' '}
      {renderIcon(option.icon, iconClass)}
      {option.label}
      {renderCheck(isChecked)}
    </div>
  );
};

export default MenuItem;
