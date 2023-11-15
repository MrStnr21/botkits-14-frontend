import { FC } from 'react';
import { ReactSVG } from 'react-svg';
import styles from './drop-selector-button.module.scss';

export interface IDropSelectorButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  icon: string;
  onClick?: VoidFunction;
  disabled?: boolean;
  extraClass?: string;
}

const DropSelectorButton: FC<IDropSelectorButton> = ({
  buttonHtmlType = 'button',
  icon,
  onClick,
  disabled,
  extraClass = '',
}): JSX.Element => {
  const className = `${styles.button} ${extraClass}`;
  return (
    <button
      className={className}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <ReactSVG src={icon} />
    </button>
  );
};

export default DropSelectorButton;
