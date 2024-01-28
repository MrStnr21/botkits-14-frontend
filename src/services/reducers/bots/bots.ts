/* eslint-disable import/no-cycle */
import {
  GETBOTS_REQUEST,
  GETBOTS_SUCCESS,
  GETBOTS_ERROR,
  TGetBotsActions,
} from '../../actions/bots/getBot';
import {
  ADD_BOT_REQUEST,
  ADD_BOT_SUCCESS,
  ADD_BOT_ERROR,
  TAddBotActions,
} from '../../actions/bots/addBot';
import {
  DELETE_BOT_REQUEST,
  DELETE_BOT_SUCCESS,
  DELETE_BOT_ERROR,
  TDeleteBotActions,
} from '../../actions/bots/deleteBot';
import {
  RENAME_BOT_REQUEST,
  RENAME_BOT_SUCCESS,
  RENAME_BOT_ERROR,
  TRenameBotActions,
} from '../../actions/bots/renameBot';

import { TBot } from '../../types/bot';

export type TBotsState = {
  bots: TBot[];

  botsRequest: boolean;
  botsSuccess: boolean;
  botsError: boolean;
};

const botsInitialState: TBotsState = {
  bots: [],

  botsRequest: false,
  botsSuccess: false,
  botsError: false,
};

function botsReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = botsInitialState,
  action:
    | TGetBotsActions
    | TAddBotActions
    | TDeleteBotActions
    | TRenameBotActions
) {
  switch (action.type) {
    // экшены получения ботов
    case GETBOTS_REQUEST: {
      return {
        ...state,
        botsRequest: true,
        botsError: false,
      };
    }
    case GETBOTS_SUCCESS: {
      return {
        ...state,
        bots: action.bot,
        botsSuccess: true,
        botsRequest: false,
      };
    }
    case GETBOTS_ERROR: {
      return {
        ...state,
        botsRequest: false,
        botsError: true,
      };
    }
    case ADD_BOT_REQUEST: {
      return {
        ...state,
        botRequest: true,
        botError: false,
      };
    }
    case ADD_BOT_SUCCESS: {
      return {
        ...state,
        bots: [...state.bots, action.bot],
        botSuccess: true,
        botRequest: false,
      };
    }
    case ADD_BOT_ERROR: {
      return {
        ...state,
        botRequest: false,
        botError: true,
      };
    }
    case DELETE_BOT_REQUEST: {
      return {
        ...state,
        botRequest: true,
        botError: false,
      };
    }
    case DELETE_BOT_SUCCESS: {
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        bots: [...state.bots].filter((bot) => bot._id !== action.id),
        botSuccess: true,
        botRequest: false,
      };
    }
    case DELETE_BOT_ERROR: {
      return {
        ...state,
        botRequest: false,
        botError: true,
      };
    }
    case RENAME_BOT_REQUEST: {
      return {
        ...state,
        botRequest: true,
        botError: false,
      };
    }
    case RENAME_BOT_SUCCESS: {
      return {
        ...state,
        bots: state.bots.map((bot) =>
          // eslint-disable-next-line no-underscore-dangle
          bot._id === action.id ? { ...bot, title: action.title } : bot
        ),
        botSuccess: true,
        botRequest: false,
      };
    }
    case RENAME_BOT_ERROR: {
      return {
        ...state,
        botRequest: false,
        botError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { botsReducer };
