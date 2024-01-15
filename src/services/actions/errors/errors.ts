const ADD_ERROR = 'ADD_ERROR';
const REMOVE_ERROR = 'REMOVE_ERROR';

interface IAddErrorAction {
  readonly type: typeof ADD_ERROR;
}

interface IRemoveErrorAction {
  readonly type: typeof REMOVE_ERROR;
}

export type TErrorActions = IAddErrorAction | IRemoveErrorAction;

export { ADD_ERROR, REMOVE_ERROR };
