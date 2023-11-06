// eslint-disable-next-line import/no-cycle
import {
  GET_PLATFORMS_REQUEST,
  GET_PLATFORMS_SUCCESS,
  GET_PLATFORMS_ERROR,
  TGetPlatformsActions,
} from '../../actions/platforms/getPlatforms';

import { TPlatform } from '../../types/platform';

export type TGetPlatformsState = {
  platforms: TPlatform[] | [];
  isLoading: boolean;
  hasError: boolean;

  getPlatformsRequest: boolean;
  getPlatformsSuccess: boolean;
  getPlatformsError: boolean;
};

const getPlatformsInitialState: TGetPlatformsState = {
  platforms: [],
  isLoading: false,
  hasError: false,

  getPlatformsRequest: false,
  getPlatformsSuccess: false,
  getPlatformsError: false,
};

function getPlatformsReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = getPlatformsInitialState,
  action: TGetPlatformsActions
) {
  switch (action.type) {
    // экшены получения шаблонов
    case GET_PLATFORMS_REQUEST: {
      return {
        ...state,
        getPlatformsRequest: true,
        getPlatformsError: false,
      };
    }
    case GET_PLATFORMS_SUCCESS: {
      return {
        ...state,
        platforms: action.platforms,
        getPlatformsSuccess: true,
        getPlatformsRequest: false,
      };
    }
    case GET_PLATFORMS_ERROR: {
      return {
        ...state,
        getPlatformsRequest: false,
        getPlatformsError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { getPlatformsReducer };
