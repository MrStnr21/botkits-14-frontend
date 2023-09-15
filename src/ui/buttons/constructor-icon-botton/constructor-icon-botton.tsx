import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import classNames from 'classnames/bind';

import stylesConstructorIconBotton from './constructor-icon-botton.module.scss';

import { BUTTON_NAME } from '../../../utils/constants';

export interface IConstructorIconBotton {
  buttonHtmlType?: 'button' | 'submit' | 'reset';
  value: BUTTON_NAME;
  onClick: (value: BUTTON_NAME) => void;
  disabled?: boolean;
  icon: string;
  active?: boolean;
  styleBtn?: 'builder' | 'mailing';
  text?: string;
}

const cx = classNames.bind(stylesConstructorIconBotton);

const ConstructorIconBotton: FC<IConstructorIconBotton> = ({
  buttonHtmlType = 'button',
  value,
  onClick,
  disabled,
  icon,
  active = false,
  text,
  styleBtn = 'builder', // Bot Builder, воронки, без текста
  // 'mailing' - Рассылки, крупные с текстом
}): JSX.Element => {
  const cnBtn =
    styleBtn === 'builder'
      ? cx('button', 'buttonBld', {
          buttonBld_active: active,
        })
      : cx('button', 'buttonMln', {
          buttonMln_active: active,
        });
  const cnIcon =
    styleBtn === 'builder'
      ? cx('icon', 'iconBld', {
          iconBld_active: active,
        })
      : cx('icon', 'iconMln', {
          iconMln_active: active,
        });

  return (
    <button
      className={cnBtn}
      onClick={() => onClick(value)}
      // eslint-disable-next-line react/button-has-type
      type={buttonHtmlType}
      disabled={disabled}
    >
      <ReactSVG src={icon} className={cnIcon} />
      {text && styleBtn === 'mailing' && <p className={cx('text')}>{text}</p>}
    </button>
  );
};

export default ConstructorIconBotton;
