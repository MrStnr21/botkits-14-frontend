// eslint-disable-next-line import/no-cycle
import {
  ADDBOTTEMPLATES_REQUEST,
  ADDBOTTEMPLATES_SUCCESS,
  ADDBOTTEMPLATES_ERROR,
  TAddTemplatesBotActions,
  DELETEBOTTEMPLATES_REQUEST,
  DELETEBOTTEMPLATES_SUCCESS,
  DELETEBOTTEMPLATES_ERROR,
} from '../../actions/bots/templatesBot';

import { TTemplateBotRes } from '../../types/bot';

export type TAddTemplatesBotState = {
  templatesBot: Array<TTemplateBotRes> | null;
  isLoading: boolean;
  hasError: boolean;

  templatesBotsRequest: boolean;
  templatesBotsSuccess: boolean;
  templatesBotsError: boolean;
};

const addTemplatesBotsInitialState: TAddTemplatesBotState = {
  templatesBot: null,
  isLoading: false,
  hasError: false,

  templatesBotsRequest: false,
  templatesBotsSuccess: false,
  templatesBotsError: false,
};

function addTemplatesBotReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = addTemplatesBotsInitialState,
  action: TAddTemplatesBotActions
) {
  switch (action.type) {
    // экшены получения шаблонов
    case ADDBOTTEMPLATES_REQUEST: {
      return {
        ...state,
        getBotsRequest: true,
        getBotsError: false,
      };
    }
    case ADDBOTTEMPLATES_SUCCESS: {
      return {
        ...state,
        botTemplates: action.botTemplates,
        getBotsSuccess: true,
        getBotsRequest: false,
      };
    }
    case ADDBOTTEMPLATES_ERROR: {
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
        botTemplates: state.templatesBot?.filter(
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

export { addTemplatesBotReducer };
