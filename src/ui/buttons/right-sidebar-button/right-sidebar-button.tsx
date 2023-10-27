import React, { FC } from 'react';
import stylesRightSidebarButton from './right-sidebar-button.module.scss';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';

const RightSidebarButton: FC = (): JSX.Element => {
  const [rotateChevron, setRotateChevron] = React.useState(false);
  const handleRotate = () => setRotateChevron(!rotateChevron);
  const rotate = rotateChevron ? 'left' : 'right';

  return (
    <button
      type="button"
      className={stylesRightSidebarButton.button}
      onClick={handleRotate}
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
