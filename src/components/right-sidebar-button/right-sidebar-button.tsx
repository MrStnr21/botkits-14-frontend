import { FC } from 'react';
import stylesRightSidebarButton from './right-sidebar-button.module.scss';
import ChevronIcon from '../icons/Chevron/ChevronIcon';

const RightSidebarButton: FC = (): JSX.Element => {
  return (
    <button type="button" className={stylesRightSidebarButton.button}>
      <ChevronIcon
        position="right"
        color="white"
        width={24}
        height={24}
        strokeWidth={1.5}
      />
    </button>
  );
};

export default RightSidebarButton;
