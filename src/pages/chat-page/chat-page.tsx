/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import ChatDialogue from '../../components/chat/chat-dialogue/desktop-dialogue';
import stylesChatDesktop from './chat-page.module.scss';
import Dialogs from '../../components/chat/dialogs/dialogs';
import Information from '../../components/chat/Information/Information';
import { IMessage, IUser } from '../../utils/mockChatData';

const ChatDesktop: FC = () => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<IMessage[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser>({
    id: null,
    name: null,
    status: null,
    messages: [],
    lastMessageAt: null,
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
        selectedMessages={selectedMessages}
        selectedUser={selectedUser}
      />
      {isInfoVisible && <Information selectedUser={selectedUser} />}
    </div>
  );
};

export default ChatDesktop;
