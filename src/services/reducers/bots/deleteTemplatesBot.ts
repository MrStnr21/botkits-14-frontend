// eslint-disable-next-line import/no-cycle
import {
  DELETEBOTTEMPLATES_REQUEST,
  DELETEBOTTEMPLATES_SUCCESS,
  DELETEBOTTEMPLATES_ERROR,
  TDeleteTemplatesBotActions,
} from '../../actions/bots/deleteTemplatesBot';

// import { TTemplateBotRes } from '../../types/bot';

export type TDeleteTemplatesBotState = {
  id: string | null;
  isLoading: boolean;
  hasError: boolean;

  deleteTemplatesBotsRequest: boolean;
  deleteTemplatesBotsSuccess: boolean;
  deleteTemplatesBotsError: boolean;
};

const deleteTemplatesBotsInitialState: TDeleteTemplatesBotState = {
  id: null,
  isLoading: false,
  hasError: false,

  deleteTemplatesBotsRequest: false,
  deleteTemplatesBotsSuccess: false,
  deleteTemplatesBotsError: false,
};

function deleteTemplatesBotReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = deleteTemplatesBotsInitialState,
  action: TDeleteTemplatesBotActions
) {
  switch (action.type) {
    // экшены получения шаблонов
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
        id: action.id,
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

export { deleteTemplatesBotReducer };
