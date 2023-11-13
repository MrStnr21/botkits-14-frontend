import React, { FC } from 'react';
import stylesRightSidebarButton from './right-sidebar-button.module.scss';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';

interface IRightSidebarButton {
  onClick?: VoidFunction;
  isVisible: boolean;
  topPX?: string;
  leftPX?: string;
}

const RightSidebarButton: FC<IRightSidebarButton> = ({
  onClick,
  isVisible,
  topPX = '0',
  leftPX = '0',
}): JSX.Element => {
  // const [rotateChevron, setRotateChevron] = React.useState(false);
  // const handleRotate = () => setRotateChevron(!rotateChevron);
  const rotate = isVisible ? 'left' : 'right';
  const styles = {
    top: topPX,
    left: leftPX,
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
