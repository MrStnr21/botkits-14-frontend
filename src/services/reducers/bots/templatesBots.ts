// eslint-disable-next-line import/no-cycle
import {
  GET_TEMPLATES_BOTS_REQUEST,
  GET_TEMPLATES_BOTS_SUCCESS,
  GET_TEMPLATES_BOTS_ERROR,
  DELETEBOTTEMPLATES_REQUEST,
  DELETEBOTTEMPLATES_SUCCESS,
  DELETEBOTTEMPLATES_ERROR,
  UPDATEBOTTEMPLATES_REQUEST,
  UPDATEBOTTEMPLATES_SUCCESS,
  UPDATEBOTTEMPLATES_ERROR,
  ADD_BOT_TEMPLATE_REQUEST,
  ADD_BOT_TEMPLATE_SUCCESS,
  ADD_BOT_TEMPLATE_ERROR,
  TGetTemplatesBotsActions,
} from '../../actions/bots/templatesBots';
import { TBotTemplate } from '../../types/bot';

export type TGetTemplatesBotsState = {
  botTemplates: Array<TBotTemplate> | [];
  isLoading: boolean;
  hasError: boolean;

  getTemplatesBotsRequest: boolean;
  getTemplatesBotsSuccess: boolean;
  getTemplatesBotsError: boolean;
};

const getTemplatesBotsInitialState: TGetTemplatesBotsState = {
  botTemplates: [],
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
        getTemplatesBotsRequest: true,
        getTemplatesBotsError: false,
      };
    }
    case GET_TEMPLATES_BOTS_SUCCESS: {
      return {
        ...state,
        botTemplates: action.botTemplates,
        getTemplatesBotsSuccess: true,
        getTemplatesBotsRequest: false,
      };
    }
    case GET_TEMPLATES_BOTS_ERROR: {
      return {
        ...state,
        getTemplatesBotsRequest: false,
        getTemplatesBotsError: true,
      };
    }

    // экшены удаления шаблонов
    case DELETEBOTTEMPLATES_REQUEST: {
      return {
        ...state,
        getTemplatesBotsRequest: true,
        getTemplatesBotsError: false,
      };
    }
    case DELETEBOTTEMPLATES_SUCCESS: {
      return {
        ...state,
        botTemplates: [...state.botTemplates].filter(
          // eslint-disable-next-line no-underscore-dangle
          (template) => template._id !== action.id
        ),
        getTemplatesBotsSuccess: true,
        getTemplatesBotsRequest: false,
      };
    }
    case DELETEBOTTEMPLATES_ERROR: {
      return {
        ...state,
        getTemplatesBotsRequest: false,
        getTemplatesBotsError: true,
      };
    }

    // экшены изменения шаблонов
    case UPDATEBOTTEMPLATES_REQUEST: {
      return {
        ...state,
        getTemplatesBotsRequest: true,
        getTemplatesBotsError: false,
      };
    }
    case UPDATEBOTTEMPLATES_SUCCESS: {
      return {
        ...state,
        botTemplates: state.botTemplates.map((template) =>
          // eslint-disable-next-line no-underscore-dangle
          template._id === action.template._id
            ? { ...template, ...action.template }
            : template
        ),
        getTemplatesBotsSuccess: true,
        getTemplatesBotsRequest: false,
      };
    }
    case UPDATEBOTTEMPLATES_ERROR: {
      return {
        ...state,
        getTemplatesBotsRequest: false,
        getTemplatesBotsError: true,
      };
    }
    case ADD_BOT_TEMPLATE_REQUEST: {
      return {
        ...state,
        getTemplatesBotsRequest: true,
        getTemplatesBotsError: false,
      };
    }
    case ADD_BOT_TEMPLATE_SUCCESS: {
      return {
        ...state,
        botTemplates: [...state.botTemplates, action.template],
        getTemplatesBotsSuccess: true,
        getTemplatesBotsRequest: false,
      };
    }
    case ADD_BOT_TEMPLATE_ERROR: {
      return {
        ...state,
        getTemplatesBotsRequest: false,
        getTemplatesBotsError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { getTemplatesBotsReducer };
