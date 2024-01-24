import {
  ADD_ERROR,
  REMOVE_ERROR,
  TError,
  TErrorActions,
} from '../../actions/errors/errors';

export type TErrorState = {
  data: TError[];
};

const errorsInitialState: TErrorState = {
  data: [],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function errorReducer(state = errorsInitialState, action: TErrorActions) {
  switch (action.type) {
    case ADD_ERROR: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case REMOVE_ERROR: {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    }
    default: {
      return state;
    }
  }
}

export default errorReducer;
