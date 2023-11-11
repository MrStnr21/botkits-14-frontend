/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import stylesChatDesktop from './chat-page.module.scss';
import Dialogs from '../../components/chat/dialogs/dialogs';

const ChatMobile: FC = () => {
  return (
    <div className={stylesChatDesktop.layout}>
      <Dialogs />
    </div>
  );
};

export default ChatMobile;
