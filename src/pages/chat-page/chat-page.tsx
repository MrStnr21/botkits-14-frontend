/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import ChatDialogue from '../../components/chat/chat-dialogue/chat-dialogue';
import stylesChatDesktop from './chat-page.module.scss';
import Dialogs from '../../components/chat/dialogs/dialogs';
import Information from '../../components/chat/Information/Information';

const ChatDesktop: FC = () => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState(null);
  const [selectedUser, setSelectedUser] = useState({
    name: null,
    status: null,
  });

  const handleClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  return (
    <div className={stylesChatDesktop.layout}>
      <Dialogs
        setSelectedMessages={setSelectedMessages}
        setSelectedUser={setSelectedUser}
      />
      <ChatDialogue
        onSidebarClick={handleClick}
        isInfoVisible={isInfoVisible}
        selected={selectedMessages}
        selectedUser={selectedUser}
      />
      {isInfoVisible && <Information selectedUser={selectedUser} />}
    </div>
  );
};

export default ChatDesktop;
