import { FC } from 'react';
import ChatDialogue from '../../components/chat-dialogue/chat-dialogue';
import stylesChatDesktop from './chat.module.scss';

const ChatDesktop: FC = (): JSX.Element => {
  return (
    <div className={stylesChatDesktop.layout}>
      <ChatDialogue />
    </div>
  );
};

export default ChatDesktop;
