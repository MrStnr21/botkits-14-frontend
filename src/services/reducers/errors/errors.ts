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
  // значения в комментарии для демонстрации работы
  data: [
    {
      message: 'ошибка при отправке данных dfdfd df dfd f df dfdf dfd dfdd',
      id: '1',
    },
    { message: 'еще ошибка', id: '2' },
    { message: 'еще ошибка', id: '3' },
    { message: 'еще ошибка', id: '4' },
  ],
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
