// eslint-disable-next-line import/no-cycle
import {
  GETBOTS_REQUEST,
  GETBOTS_SUCCESS,
  GETBOTS_ERROR,
  TGetBotsActions,
} from '../../actions/bots/getBot';

import { TBot } from '../../types/bot';

export type TGetBotsState = {
  bots: TBot[] | [];
  isLoading: boolean;
  hasError: boolean;

  getBotsRequest: boolean;
  getBotsSuccess: boolean;
  getBotsError: boolean;
};

const getBotsInitialState: TGetBotsState = {
  bots: [],
  isLoading: false,
  hasError: false,

  getBotsRequest: false,
  getBotsSuccess: false,
  getBotsError: false,
};

function getBotsReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = getBotsInitialState,
  action: TGetBotsActions
) {
  switch (action.type) {
    // экшены получения ботов
    case GETBOTS_REQUEST: {
      return {
        ...state,
        getBotsRequest: true,
        getBotsError: false,
      };
    }
    case GETBOTS_SUCCESS: {
      return {
        ...state,
        bots: action.bot,
        getBotsSuccess: true,
        getBotsRequest: false,
      };
    }
    case GETBOTS_ERROR: {
      return {
        ...state,
        getBotsRequest: false,
        getBotsError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { getBotsReducer };
