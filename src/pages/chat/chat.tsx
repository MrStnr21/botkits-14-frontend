import { FC, useState } from 'react';
import ChatDialogue from '../../components/chat/chat-dialogue/chat-dialogue';
import stylesChatDesktop from './chat.module.scss';
import Dialogs from '../../components/chat/dialogs/dialogs';
import Information from '../../components/chat/Information/Information';

const ChatDesktop: FC = (): JSX.Element => {
  const [isInfoVisible, setInfoVisible] = useState(false);

  const handleClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  return (
    <div className={stylesChatDesktop.layout}>
      <Dialogs />
      <ChatDialogue
        onSidebarClick={handleClick}
        isInfoVisible={isInfoVisible}
      />
      {isInfoVisible && <Information />}
    </div>
  );
};

export default ChatDesktop;
