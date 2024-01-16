/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-cycle
import {
  GET_BOT_ACCESSES_SUCCESS,
  GET_BOT_ACCESSES_ERROR,
  GET_BOT_ACCESSES_REQUEST,
  TGetBotAccessesActions,
} from '../../actions/botAccesses/botAccesses';
import { TBotAccess } from '../../types/botAccesses';

export type TBotAccessesState = {
  botAccesses: Array<TBotAccess> | [];
  isLoading: boolean;
  isError: boolean;
  getBotAccessesRequest: boolean;
  getBotAccessesSuccess: boolean;
  getBotAccessesError: boolean;
};

const botAccessesInitialState: TBotAccessesState = {
  botAccesses: [],
  isLoading: false,
  isError: false,
  getBotAccessesRequest: false,
  getBotAccessesSuccess: false,
  getBotAccessesError: false,
};

function botAccessesReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = botAccessesInitialState,
  action: TGetBotAccessesActions
) {
  console.log(action);
  switch (action.type) {
    case GET_BOT_ACCESSES_REQUEST: {
      return {
        ...state,
        getBotAccessesRequest: true,
        getBotAccessesError: false,
      };
    }
    case GET_BOT_ACCESSES_SUCCESS: {
      return {
        ...state,
        botAccesses: action.botAccesses,
        getBotAccessesSuccess: true,
        getBotAccessesRequest: false,
      };
    }
    case GET_BOT_ACCESSES_ERROR: {
      return {
        ...state,
        getBotAccessesRequest: false,
        getBotAccessesError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { botAccessesReducer };
