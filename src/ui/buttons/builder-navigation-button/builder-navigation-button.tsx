import { FC } from 'react';

import styles from './builder-navigation-button.module.scss';

export interface INavigationButton {
  icon: string;
  onClick?: VoidFunction;
  disabled?: boolean;
  alt: string;
}

const NavigationButton: FC<INavigationButton> = ({
  icon,
  onClick,
  disabled,
  alt = '',
}): JSX.Element => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      <img src={icon} className={styles.icon} alt={alt} />
    </button>
  );
};

export default NavigationButton;
