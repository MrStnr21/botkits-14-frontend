import {
  ADD_ERROR,
  REMOVE_ERROR,
  TErrorActions,
} from '../../actions/errors/errors';

const errorsInitialState = {
  amount: 3,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
function errorReducer(state = errorsInitialState, action: TErrorActions) {
  switch (action.type) {
    case ADD_ERROR: {
      return {
        ...state,
        amount: state.amount + 1,
      };
    }
    case REMOVE_ERROR: {
      return {
        ...state,
        amount: state.amount - 1,
      };
    }
    default: {
      return state;
    }
  }
}

export default errorReducer;
