export const OPEN_MES_POPUP = 'OPEN_MES_POPUP';
export const CLOSE_MES_POPUP = 'CLOSE_MES_POPUP';

export interface IOpenMesPopupAction {
  readonly type: typeof OPEN_MES_POPUP;
}

export interface ICloseMesPopupAction {
  readonly type: typeof CLOSE_MES_POPUP;
}

export type TToggleMesPopupActions = IOpenMesPopupAction | ICloseMesPopupAction;
