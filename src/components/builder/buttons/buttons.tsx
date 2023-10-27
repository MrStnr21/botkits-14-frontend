import React, { FC } from 'react';

import cn from 'classnames/bind';
import Button from '../../../ui/buttons/button/button';
import stylesButtonS from './buttons.module.scss';
// import { JsxElement } from 'typescript';

export interface IButtonS {
  type: 'start' | 'stop' | 'test';
  onClick?: VoidFunction;
}

const cx = cn.bind(stylesButtonS);

const ButtonS: FC<IButtonS> = ({ type = 'start', onClick }) => {
  const getButton = (): React.ReactElement => {
    switch (type) {
      case 'stop': {
        return (
          <Button
            onClick={onClick}
            variant="default"
            size="medium"
            color="grey"
            buttonHtmlType="button"
            active={false}
            disabled={false}
          >
            <p className={cx('textStop')}>ОСТАНОВИТЬ</p>
          </Button>
        );
      }
      case 'test': {
        return (
          <Button
            onClick={onClick}
            variant="default"
            size="medium"
            color="green"
            buttonHtmlType="button"
            active={false}
            disabled={false}
          >
            <p className={cx('textTest')}>ТЕСТИРОВАТЬ</p>
          </Button>
        );
      }
      default: {
        return (
          <Button
            onClick={onClick}
            variant="circle"
            size="large"
            color="green"
            buttonHtmlType="button"
            active={false}
            disabled={false}
          >
            <p className={cx('textStart')}>Start</p>
          </Button>
        );
      }
    }
  };

  return getButton();
};

export default ButtonS;
