import React, { FC } from 'react';
import styles from './right-sidebar-button.module.scss';
import ChevronIcon from '../../../ui/icons/Chevron/ChevronIcon';

interface IRightSidebarButton {
  onClick?: VoidFunction;
  isVisible?: boolean;
  topPX?: string;
  rightPX?: string;
}

const RightSidebarButton: FC<IRightSidebarButton> = ({
  onClick,
  isVisible,
  topPX = '0',
  rightPX = '0',
}) => {
  const rotate = isVisible ? 'right' : 'left';
  const position = {
    top: topPX,
    right: rightPX,
  };

  return (
    <button
      type="button"
      className={styles.button}
      style={position}
      onClick={onClick}
    >
      <ChevronIcon
        position={rotate}
        color="white"
        width={24}
        height={24}
        strokeWidth={1.5}
      />
    </button>
  );
};

export default RightSidebarButton;
