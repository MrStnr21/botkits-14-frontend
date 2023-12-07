// eslint-disable-next-line import/no-cycle
import {
  GET_TEMPLATES_BOTS_REQUEST,
  GET_TEMPLATES_BOTS_SUCCESS,
  GET_TEMPLATES_BOTS_ERROR,
  DELETEBOTTEMPLATES_REQUEST,
  DELETEBOTTEMPLATES_SUCCESS,
  DELETEBOTTEMPLATES_ERROR,
  TGetTemplatesBotsActions,
} from '../../actions/bots/getTemplatesBots';

import { TTemplateBotRes } from '../../types/bot';

export type TGetTemplatesBotsState = {
  templatesBots: Array<TTemplateBotRes> | null;
  isLoading: boolean;
  hasError: boolean;

  getTemplatesBotsRequest: boolean;
  getTemplatesBotsSuccess: boolean;
  getTemplatesBotsError: boolean;
};

const getTemplatesBotsInitialState: TGetTemplatesBotsState = {
  templatesBots: null,
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

    // экшены удаления шаблонов
    case DELETEBOTTEMPLATES_REQUEST: {
      return {
        ...state,
        getBotsRequest: true,
        getBotsError: false,
      };
    }
    case DELETEBOTTEMPLATES_SUCCESS: {
      return {
        ...state,
        botTemplates: state.templatesBots?.filter(
          // eslint-disable-next-line no-underscore-dangle
          (template) => template._id !== action.botTemplates._id
        ),
        getBotsSuccess: true,
        getBotsRequest: false,
      };
    }
    case DELETEBOTTEMPLATES_ERROR: {
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
