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
      const { wsStart, onClose, wsSend, wsSendUserId } = WsActions;

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
        // Отписываемся от всех предыдущих событий
        socket.off('connect');
        socket.off('connect_error');
        socket.off('messageMockClient');
        socket.off('disconnect');
        socket.off('allChatsHistory');
        socket.off('register');

        // Закрываем предыдущее соединение
        socket.on('connect', () => {
          console.log('Socket.IO Connected');
          dispatch({ type: SET_STATUS, payload: 'success' });
        });

        socket.on('connect_error', (error) => {
          console.error('Socket.IO Connection Error', error);
          dispatch({ type: SET_STATUS, payload: 'error' });
        });

        socket.on('messageMockClient', (message) => {
          console.log('Socket.IO Message', message);
          dispatch({ type: UPDATE_HISTORY, payload: message });
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
          socket.emit('mockChatMessage', payload);
        } else if (type === wsSendUserId) {
          socket.emit('mockChatHistory', payload);
        }
      }

      next(action);
    };
  };
};

export default socketMiddleware;
