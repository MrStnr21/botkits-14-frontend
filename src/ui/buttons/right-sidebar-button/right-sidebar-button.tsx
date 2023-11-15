import React, { FC } from 'react';
import stylesRightSidebarButton from './right-sidebar-button.module.scss';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';

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
  const styles = {
    top: topPX,
    right: rightPX,
  };

  return (
    <button
      type="button"
      className={stylesRightSidebarButton.button}
      style={styles}
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
