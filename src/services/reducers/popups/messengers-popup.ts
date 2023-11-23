import {
  CLOSE_MES_POPUP,
  OPEN_MES_POPUP,
  TToggleMesPopupActions,
} from '../../actions/popups/messengers-popup';

export type TToggleMesPopupState = {
  opened: boolean;
};

const toggleInitialState: TToggleMesPopupState = {
  opened: false,
};

export function toggleMesPopup(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = toggleInitialState,
  action: TToggleMesPopupActions
) {
  switch (action.type) {
    case OPEN_MES_POPUP: {
      return {
        ...state,
        opened: true,
      };
    }
    case CLOSE_MES_POPUP: {
      return {
        ...state,
        opened: false,
      };
    }
    default: {
      return state;
    }
  }
}
