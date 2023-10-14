import { FC } from 'react';
import Dialog from '../../components/dialog/dialog';
import stylesChatDesktop from './chat.module.scss';

const ChatDesktop: FC = (): JSX.Element => {
  return (
    <div className={stylesChatDesktop.layout}>
      <Dialog />
    </div>
  );
};

export default ChatDesktop;
