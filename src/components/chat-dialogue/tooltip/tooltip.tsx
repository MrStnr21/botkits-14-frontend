import React, { FC } from 'react';
import styles from './tooltip.module.scss';
import Typography from '../../../ui/typography/typography';

interface ITooltip {
  children: React.ReactNode;
  text: string;
}

const Tooltip: FC<ITooltip> = ({ children, text }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <Typography tag="span" className={styles.tooltip__text}>
        {text}
      </Typography>
    </div>
  );
};

export default Tooltip;
