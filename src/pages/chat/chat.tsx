import { FC } from 'react';
import ChatDialogue from '../../components/chat-dialogue/chat-dialogue';
import stylesChatDesktop from './chat.module.scss';
import Dialogs from '../../components/chat/dialogs/dialogs';
import Information from '../../components/chat/Information/Information';

const ChatDesktop: FC = (): JSX.Element => {
  return (
    <div className={stylesChatDesktop.layout}>
      <Dialogs />
      <ChatDialogue />
      <Information />
    </div>
  );
};

export default ChatDesktop;
