import { FC, useState } from 'react';
import { Position, ReactFlowProvider } from 'reactflow';

import cn from 'classnames/bind';
import Button from '../../../../ui/buttons/button/button';
import styles from './button-start.module.scss';
import Typography from '../../../../ui/typography/typography';
import CustomHandle from '../../flow/custom-handle/custom-handle';

export type TButtonStartProps = {
  data: {
    type: string;
    onClick?: VoidFunction;
  };
};

const cx = cn.bind(styles);

const ButtonStart: FC<TButtonStartProps> = ({ data }) => {
  const [hidden, setHidden] = useState(true);

  const getButton = () => {
    switch (data.type) {
      case 'stop': {
        return (
          <Button
            onClick={data.onClick}
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
            onClick={data.onClick}
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
              onClick={data.onClick}
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

  return (
    <ReactFlowProvider>
      <CustomHandle position={Position.Bottom} hidden={hidden} type="target" />
      <div
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        {getButton()}
      </div>
    </ReactFlowProvider>
  );
};

export default ButtonStart;
