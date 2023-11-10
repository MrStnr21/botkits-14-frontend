/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { Route, Routes } from 'react-router';
import ChatDialogue from '../../components/chat/chat-dialogue/desktop-dialogue';
import stylesChatDesktop from './chat-page.module.scss';
import Dialogs from '../../components/chat/dialogs/dialogs';
import Information from '../../components/chat/Information/Information';
import MobileDialog from '../../components/chat/chat-dialogue/mobile-dialogue/mobile-dialogue';

const ChatMobile: FC = () => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  // const [selectedMessages, setSelectedMessages] = useState(null);
  // const [selectedUser, setSelectedUser] = useState({
  //   name: null,
  //   status: null,
  // });

  const handleClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  return (
    <div className={stylesChatDesktop.layout}>
      <Dialogs />
      {/* // setSelectedMessages={setSelectedMessages}
        // setSelectedUser={setSelectedUser} */}
      {/* /> */}
    </div>
  );
};

export default ChatMobile;
