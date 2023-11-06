// eslint-disable-next-line import/no-cycle
import {
  GET_BUILDERS_DATA_REQUEST,
  GET_BUILDERS_DATA_SUCCESS,
  GET_BUILDERS_DATA_ERROR,
  TGetBuildersDataActions,
} from '../../actions/builder/getBuilders';

import { TBuilderData } from '../../types/builder';

export type TGetBuildersDataState = {
  dataBuilders: TBuilderData[] | [];
  isLoading: boolean;
  hasError: boolean;

  getBuidersDataRequest: boolean;
  getBuidersDataSuccess: boolean;
  getBuidersDataError: boolean;
};

const getBuildersDataInitialState: TGetBuildersDataState = {
  dataBuilders: [],
  isLoading: false,
  hasError: false,

  getBuidersDataRequest: false,
  getBuidersDataSuccess: false,
  getBuidersDataError: false,
};

function getBuildersDataReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = getBuildersDataInitialState,
  action: TGetBuildersDataActions
) {
  switch (action.type) {
    case GET_BUILDERS_DATA_REQUEST: {
      return {
        ...state,
        getBuidersDataRequest: true,
        getBuidersDataError: false,
      };
    }
    case GET_BUILDERS_DATA_SUCCESS: {
      return {
        ...state,
        dataBuilders: action.dataBuilders,
        getBuidersDataSuccess: true,
        getBuidersDataRequest: false,
      };
    }
    case GET_BUILDERS_DATA_ERROR: {
      return {
        ...state,
        getBuidersDataRequest: false,
        getBuidersDataError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { getBuildersDataReducer };
