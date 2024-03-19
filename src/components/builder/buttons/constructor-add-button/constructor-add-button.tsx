import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import PlusIcon from '../../../../images/icon/24x24/constructor/plus.svg';
import Horizontal from '../../../../images/icon/24x24/constructor/horizontal.svg';
import Vertical from '../../../../images/icon/24x24/constructor/vertical.svg';
import Photo from '../../../../images/icon/24x24/add content/image.svg';

import styles from './constructor-add-button.module.scss';

export enum Icons {
  add = 'add',
  horizontalInline = 'horizontal inline',
  verticalInline = 'vertical inline',
  photo = 'photo',
}

export interface IConstructorAddButton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  onClick?: VoidFunction;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: string;
  picture?: React.ReactNode;
  maxWidth?: string;
  unadaptive?: boolean;
}

const ConstructorAddButton: FC<IConstructorAddButton> = ({
  buttonHtmlType = 'button',
  onClick,
  disabled,
  children,
  icon = 'add',
  picture,
  maxWidth,
  unadaptive,
}) => {
  const getIcon = () => {
    switch (icon) {
      case Icons.add: {
        return PlusIcon;
      }
      case Icons.horizontalInline: {
        return Horizontal;
      }
      case Icons.verticalInline: {
        return Vertical;
      }
      case Icons.photo: {
        return Photo;
      }
      default: {
        return PlusIcon;
      }
    }
  };

  return (
    <button
      className={unadaptive ? styles.button_unadaptive : styles.button}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
      style={maxWidth ? { maxWidth } : {}}
    >
      {' '}
      {picture || <ReactSVG src={getIcon()} />}
      <p className={styles.text}>{children}</p>
    </button>
  );
};

export default ConstructorAddButton;
