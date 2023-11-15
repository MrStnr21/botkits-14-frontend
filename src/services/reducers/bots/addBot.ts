// eslint-disable-next-line import/no-cycle
import {
  ADDBOT_REQUEST,
  ADDBOT_SUCCESS,
  ADDBOT_ERROR,
  TAddBotActions,
} from '../../actions/bots/addBot';

import { TBot } from '../../types/bot';

export type TAddBotState = {
  bot: TBot | null;
  isLoading: boolean;
  hasError: boolean;

  addBotRequest: boolean;
  addBotSuccess: boolean;
  addBotError: boolean;
};

const addBotInitialState: TAddBotState = {
  bot: null,
  isLoading: false,
  hasError: false,

  addBotRequest: false,
  addBotSuccess: false,
  addBotError: false,
};

function addBotReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = addBotInitialState,
  action: TAddBotActions
) {
  switch (action.type) {
    // экшены добавления ботов
    case ADDBOT_REQUEST: {
      return {
        ...state,
        addBotRequest: true,
        addBotError: false,
      };
    }
    case ADDBOT_SUCCESS: {
      return {
        ...state,
        bot: action.bot,
        addBotSuccess: true,
        addBotRequest: false,
      };
    }
    case ADDBOT_ERROR: {
      return {
        ...state,
        addBotRequest: false,
        addBotError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { addBotReducer };
