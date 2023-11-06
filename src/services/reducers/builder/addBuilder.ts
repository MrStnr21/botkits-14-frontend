// eslint-disable-next-line import/no-cycle
import {
  ADD_BUILDERDATA_REQUEST,
  ADD_BUILDERDATA_SUCCESS,
  ADD_BUILDERDATA_ERROR,
  TAddBuilderDataActions,
} from '../../actions/builder/addBuilder';

import { TBuilderData } from '../../types/builder';

export type TAddBuilderDataState = {
  dataBuilder: TBuilderData | null;
  isLoading: boolean;
  hasError: boolean;

  addBuilderDataRequest: boolean;
  addBuilderDataSuccess: boolean;
  addBuilderDataError: boolean;
};

const addBuilderDataInitialState: TAddBuilderDataState = {
  dataBuilder: null,
  isLoading: false,
  hasError: false,

  addBuilderDataRequest: false,
  addBuilderDataSuccess: false,
  addBuilderDataError: false,
};

function addBuilderDataReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = addBuilderDataInitialState,
  action: TAddBuilderDataActions
) {
  switch (action.type) {
    // экшены добавления ботов
    case ADD_BUILDERDATA_REQUEST: {
      return {
        ...state,
        addBuilderDataRequest: true,
        addBuilderDataError: false,
      };
    }
    case ADD_BUILDERDATA_SUCCESS: {
      return {
        ...state,
        dataBuilder: action.dataBuilder,
        addBuilderDataSuccess: true,
        addBuilderDataRequest: false,
      };
    }
    case ADD_BUILDERDATA_ERROR: {
      return {
        ...state,
        addBuilderDataRequest: false,
        addBuilderDataError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { addBuilderDataReducer };
