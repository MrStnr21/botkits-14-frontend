/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/default-param-last */
import {
  SELECTED_USER,
  SET_CHATS_HISTORY,
  SET_STATUS,
  UPDATE_HISTORY,
} from '../../actions/chat/chat';

export type TChatState = {
  status: string;
  history: any;
  historyIsHere: boolean;
  selectedUser: any;
};

const intialState: TChatState = {
  status: '',
  history: [],
  historyIsHere: false,
  selectedUser: {},
};

const chatReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    case SET_CHATS_HISTORY: {
      return {
        ...state,
        history: action.payload,
      };
    }
    case UPDATE_HISTORY: {
      const { payload } = action;
      // Находим индекс чата в истории
      const chatIndex = state.history.findIndex(
        (hist: any) => hist.chatId === payload.chatId
      );
      /* console.log(state.history[0].chatId);
      console.log(chatIndex); */
      console.log(payload);

      if (chatIndex === -1) {
        // Если чата нет, создаем новую историю для чата
        const newChatHistory = {
          chatId: payload.chatId,
          messages: [
            {
              chatId: payload.chatId,
              id: '1', // Уникальный идентификатор сообщения
              avatar: '', // Ссылка на аватар, если есть
              user: payload.sender,
              sender: payload.sender,
              message: payload.message,
              time: new Date().toISOString(), // Время получения сообщения
              online: true, // Предполагается, что пользователь онлайн
              seen: false, // Сообщение не прочитано
              status: 'sent', // Статус отправлено
            },
          ],
          profile: payload.participants[1],
        };

        /* console.log(
          `это история чатов - ${JSON.stringify(state.history, null, 2)}`
        ); */

        return {
          ...state,
          history: [...state.history, newChatHistory],
        };
      } else {
        // Если история найдена, добавляем сообщение в существующую историю
        const newMessage = {
          chatId: payload.chatId,
          id: '1', // Уникальный идентификатор сообщения
          avatar: '', // Ссылка на аватар, если есть
          sender: payload.sender,
          user: payload.sender,
          message: payload.message,
          time: new Date().toISOString(), // Время получения сообщения
          online: true, // Предполагается, что пользователь онлайн
          seen: false, // Сообщение не прочитано
          status: 'sent', // Статус отправлено
        };

        return {
          ...state,
          history: [
            ...state.history.slice(0, chatIndex),
            {
              ...state.history[chatIndex],
              messages: [...state.history[chatIndex].messages, newMessage],
            },
            ...state.history.slice(chatIndex + 1),
          ],
          selectedUser: {
            ...state.selectedUser,
            messages: [...state.selectedUser.messages, newMessage],
          },
        };
      }
    }
    case SELECTED_USER: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default chatReducer;
