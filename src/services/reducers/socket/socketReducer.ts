import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_GET_MESSAGE,
  WS_CONNECTION_SUCCESS,
} from '../../../utils/socketActionTypes';
import { TWSActions } from '../../actions/socket/socketActions';

export type TSocketState = {
  wsConnected: boolean;
  data: any;
  error: boolean;
  errorMessage: string | null;
};

const initialState: TSocketState = {
  data: [],
  wsConnected: false,
  error: false,
  errorMessage: null,
};
export const socketReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: TWSActions
): TSocketState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: false,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: false,
        wsConnected: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
