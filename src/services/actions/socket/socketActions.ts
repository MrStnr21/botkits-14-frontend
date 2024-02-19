import { SET_CHATS_HISTORY } from '../chat/chat';

export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';
export const WS_SEND_USER_ID = 'WS_SEND_USER_ID';

export const wsActions = {
  wsStart: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  wsSend: WS_SEND_MESSAGE,
  wsSendUserId: WS_SEND_USER_ID,
  wsChatHistory: SET_CHATS_HISTORY,
};
