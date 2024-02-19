/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import ChatDialogue from '../../components/chat/chat-dialogue/desktop-dialogue';
import stylesChatDesktop from './chat-page.module.scss';
import Dialogs from '../../components/chat/dialogs/dialogs';
import Information from '../../components/chat/Information/Information';
import { IMessage, IUser } from '../../utils/mockChatData';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { wsActions } from '../../services/actions/socket/socketActions';
import { BASE_URL } from '../../utils/config';

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

  const { user, status } = useAppSelector((store: any) => ({
    user: store.chat.user,
    status: store.chat.status,
    history: store.chat.history,
    usersFrontConnected: store.chat.usersFrontConnected,
    historyIsHere: store.chat.historyIsHere,
  }));

  const dispatch = useAppDispatch();

  const handleClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  useEffect(() => {
    dispatch({
      type: wsActions.wsStart,
      payload: `wss://ebaa-77-222-102-117.ngrok-free.app/socket.io/?EIO=4&transport=polling&t=Ot0zgJ4`,
    });
  }, []);

  useEffect(() => {
    if (status === 'success') {
      dispatch({ type: wsActions.wsSendUserId, payload: user.id });
    }
  }, [status]);

  return (
    <div className={stylesChatDesktop.layout}>
      <Dialogs stateUser={selectedUser} setSelectedUser={setSelectedUser} />
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
