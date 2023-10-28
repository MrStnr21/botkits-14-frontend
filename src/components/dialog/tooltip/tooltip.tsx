import React, { FC } from 'react';
import styles from './tooltip.module.scss';

interface ITooltip {
  children: React.ReactNode;
  text: string;
}

const Tooltip: FC<ITooltip> = ({ children, text }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltip__text}>{text}</div>
    </div>
  );
};

export default Tooltip;
