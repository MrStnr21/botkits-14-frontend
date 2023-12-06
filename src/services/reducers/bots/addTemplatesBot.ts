// eslint-disable-next-line import/no-cycle
import {
  ADDBOTTEMPLATES_REQUEST,
  ADDBOTTEMPLATES_SUCCESS,
  ADDBOTTEMPLATES_ERROR,
  TAddTemplatesBotActions,
} from '../../actions/bots/addTemplatesBot';

import { TTemplateBotRes } from '../../types/bot';

export type TAddTemplatesBotState = {
  templatesBot: TTemplateBotRes | null;
  isLoading: boolean;
  hasError: boolean;

  getTemplatesBotsRequest: boolean;
  getTemplatesBotsSuccess: boolean;
  getTemplatesBotsError: boolean;
};

const addTemplatesBotsInitialState: TAddTemplatesBotState = {
  templatesBot: null,
  isLoading: false,
  hasError: false,

  getTemplatesBotsRequest: false,
  getTemplatesBotsSuccess: false,
  getTemplatesBotsError: false,
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
    default: {
      return state;
    }
  }
}

export { addTemplatesBotReducer };
