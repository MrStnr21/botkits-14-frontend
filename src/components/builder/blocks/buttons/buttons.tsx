import React, { FC } from 'react';

import cn from 'classnames/bind';
import Button from '../../../../ui/buttons/button/button';
import stylesButtonS from './buttons.module.scss';
import Typography from '../../../../ui/typography/typography';

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
            size="small"
            color="grey"
            buttonHtmlType="button"
            active={false}
            disabled={false}
          >
            <Typography tag="p" className={cx('textStop')}>
              ОСТАНОВИТЬ
            </Typography>
          </Button>
        );
      }
      case 'test': {
        return (
          <Button
            onClick={onClick}
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="button"
            active={false}
            disabled={false}
          >
            <Typography tag="p" className={cx('textTest')}>
              ТЕСТИРОВАТЬ
            </Typography>
          </Button>
        );
      }
      default: {
        return (
          <div className={cx('wrapper')}>
            <Button
              onClick={onClick}
              variant="default"
              size="small"
              color="green"
              buttonHtmlType="button"
              active={false}
              disabled={false}
            >
              <Typography tag="p" className={cx('textStart')}>
                Start
              </Typography>
            </Button>
          </div>
        );
      }
    }
  };

  return getButton();
};

export default ButtonS;
