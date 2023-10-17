// eslint-disable-next-line import/no-cycle
import {
  GET_TEMPLATES_BOTS_REQUEST,
  GET_TEMPLATES_BOTS_SUCCESS,
  GET_TEMPLATES_BOTS_ERROR,
  TGetTemplatesBotsActions,
} from '../../actions/bots/getTemplatesBots';

import { TTemplateBot } from '../../types/bot';

export type TGetTemplatesBotsState = {
  templatesBots: TTemplateBot[] | [];
  isLoading: boolean;
  hasError: boolean;

  getTemplatesBotsRequest: boolean;
  getTemplatesBotsSuccess: boolean;
  getTemplatesBotsError: boolean;
};

const getTemplatesBotsInitialState: TGetTemplatesBotsState = {
  templatesBots: [],
  isLoading: false,
  hasError: false,

  getTemplatesBotsRequest: false,
  getTemplatesBotsSuccess: false,
  getTemplatesBotsError: false,
};

function getTemplatesBotsReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = getTemplatesBotsInitialState,
  action: TGetTemplatesBotsActions
) {
  switch (action.type) {
    // экшены получения шаблонов
    case GET_TEMPLATES_BOTS_REQUEST: {
      return {
        ...state,
        getBotsRequest: true,
        getBotsError: false,
      };
    }
    case GET_TEMPLATES_BOTS_SUCCESS: {
      return {
        ...state,
        templatesBots: action.templatesBots,
        getBotsSuccess: true,
        getBotsRequest: false,
      };
    }
    case GET_TEMPLATES_BOTS_ERROR: {
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

export { getTemplatesBotsReducer };
