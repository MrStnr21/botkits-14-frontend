const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';

export type TError = {
  id: string;
  message?: string;
};

interface IAddErrorAction {
  readonly type: typeof ADD_ERROR;
  readonly payload: TError;
}

interface IRemoveErrorAction {
  readonly type: typeof REMOVE_ERROR;
  readonly payload: Omit<TError, 'message'>;
}

export type TErrorActions = IAddErrorAction | IRemoveErrorAction;

export { ADD_ERROR, REMOVE_ERROR };
