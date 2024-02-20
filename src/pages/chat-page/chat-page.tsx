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
    user: store.getUserInfo.user,
    status: store.chat.status,
  }));

  const dispatch = useAppDispatch();

  const handleClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  useEffect(() => {
    dispatch({
      type: wsActions.wsStart,
      payload: `http://localhost:3001`,
    });
  }, []);

  useEffect(() => {
    if (status === 'success') {
      // eslint-disable-next-line no-underscore-dangle
      dispatch({ type: wsActions.wsSendUserId, payload: user._id });
    }
  }, [status]);

  return (
    <div className={stylesChatDesktop.layout}>
      <Dialogs stateUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ChatDialogue
        onSidebarClick={handleClick}
        isInfoVisible={isInfoVisible}
      />
      {isInfoVisible && <Information selectedUser={selectedUser} />}
    </div>
  );
};

export default ChatDesktop;
