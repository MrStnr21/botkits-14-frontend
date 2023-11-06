// eslint-disable-next-line import/no-cycle
import {
  GET_BUILDER_DATA_REQUEST,
  GET_BUILDER_DATA_SUCCESS,
  GET_BUILDER_DATA_ERROR,
  TGetBuilderDataActions,
} from '../../actions/builder/getBuilder';

import { TBuilderData } from '../../types/builder';

export type TGetBuilderDataState = {
  dataBuilder: TBuilderData | null;
  isLoading: boolean;
  hasError: boolean;

  getBuiderDataRequest: boolean;
  getBuiderDataSuccess: boolean;
  getBuiderDataError: boolean;
};

const getBuilderDataInitialState: TGetBuilderDataState = {
  dataBuilder: null,
  isLoading: false,
  hasError: false,

  getBuiderDataRequest: false,
  getBuiderDataSuccess: false,
  getBuiderDataError: false,
};

function getBuilderDataReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = getBuilderDataInitialState,
  action: TGetBuilderDataActions
) {
  switch (action.type) {
    case GET_BUILDER_DATA_REQUEST: {
      return {
        ...state,
        getBuiderDataRequest: true,
        getBuiderDataError: false,
      };
    }
    case GET_BUILDER_DATA_SUCCESS: {
      return {
        ...state,
        dataBuilder: action.dataBuilder,
        getBuiderDataSuccess: true,
        getBuiderDataRequest: false,
      };
    }
    case GET_BUILDER_DATA_ERROR: {
      return {
        ...state,
        getBuiderDataRequest: false,
        getBuiderDataError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { getBuilderDataReducer };
