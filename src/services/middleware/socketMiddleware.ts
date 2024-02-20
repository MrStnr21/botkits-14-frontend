/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Middleware } from 'redux';
import { Socket, io } from 'socket.io-client';
import { wsActions } from '../actions/socket/socketActions';
import {
  NEW_USER_CONNECTED,
  SET_CHATS_HISTORY,
  SET_STATUS,
  UPDATE_HISTORY,
} from '../actions/chat/chat';
import { getAccessToken } from '../../auth/authService';

// socketMiddleware.ts
const socketMiddleware = (WsActions: typeof wsActions): Middleware => {
  return (store) => {
    let socket: Socket | null = null;
    let url;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onClose, wsSend } = WsActions;

      if (type === wsStart) {
        url = payload;
        socket = io(url, {
          /* transports: ['websocket'], */
          extraHeaders: {
            Authorization: getAccessToken() || '',
          },
        });
      } else if (type === onClose) {
        socket && socket.off();
      }

      if (socket) {
        socket.removeAllListeners();
        // Закрываем предыдущее соединение
        socket.on('connect', () => {
          console.log('Socket.IO Connected');
          dispatch({ type: SET_STATUS, payload: 'success' });
        });

        socket.on('connect_error', (error) => {
          console.error('Socket.IO Connection Error', error);
          dispatch({ type: SET_STATUS, payload: 'error' });
        });

        socket.on('message', (message) => {
          const messageObj = JSON.parse(message);
          console.log('Socket.IO Message', message);
          dispatch({ type: UPDATE_HISTORY, payload: messageObj });
        });

        socket.on('newChat', async (chatData) => {
          console.log(
            `Сработало событие создание нового чата у фронитового клиента - ${JSON.stringify(
              chatData,
              null,
              2
            )}`
          );
          const res = JSON.parse(chatData);
          socket!.emit('start-dialog', {
            from: res.participants[0],
            to: res.participants[1],
          });

          socket!.emit('rootServerMessage', res);
        });

        socket.on('send_rooms', (inviteData) => {
          console.log(
            'Сработало событие получение комнат у фронитового клиента:',
            inviteData
          );

          // socket!.emit('send_rooms', inviteData);
        });

        socket.on('disconnect', (reason) => {
          console.log('Socket.IO Disconnected', reason);
          dispatch({ type: SET_STATUS, payload: 'closed' });
        });

        socket.on('allChatsHistory', (history) => {
          console.log(
            'Socket.IO allChatsHistory',
            JSON.stringify(history, null, 2)
          );
          if (history.length === 0) {
            return;
          }
          dispatch({ type: SET_CHATS_HISTORY, payload: history });
        });

        socket.on('register', (user) => {
          const userObj = JSON.parse(user);
          console.log(
            `Socket.IO на рутовом фронтенде к чатам подключился пользователь - ${JSON.stringify(
              userObj,
              null,
              2
            )}`
          );
          dispatch({ type: NEW_USER_CONNECTED, payload: userObj });
        });

        if (type === wsSend) {
          // const { message } = payload;
          socket.emit('rootServerMessage', payload);
        }
      }

      next(action);
    };
  };
};

export default socketMiddleware;
