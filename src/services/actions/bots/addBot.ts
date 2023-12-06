// import { addBotApi } from '../../../api';

// eslint-disable-next-line import/no-cycle
// import { AppDispatch, AppThunk } from '../../types';
import { TBot } from '../../types/bot';

const ADDBOT_REQUEST = 'ADDBOT_REQUSET';
const ADDBOT_SUCCESS = 'ADDBOT_SUCCESS';
const ADDBOT_ERROR = 'ADDBOTT_ERROR';

export interface IAddBotRequestAction {
  readonly type: typeof ADDBOT_REQUEST;
}

export interface IAddBotSuccessAction {
  readonly type: typeof ADDBOT_SUCCESS;
  bot: TBot;
}

export interface IAddBotErrorAction {
  readonly type: typeof ADDBOT_ERROR;
}

export type TAddBotActions =
  | IAddBotRequestAction
  | IAddBotSuccessAction
  | IAddBotErrorAction;

// экшн добавления бота - не используется
// const addBotAction: AppThunk = (botinfo: TBot, token: string | null, templateId: string | null) => {
//   return (dispatch: AppDispatch) => {
//     dispatch({
//       type: ADDBOT_REQUEST,
//     });
//     console.log(botinfo);
//     addBotApi(botinfo, token)
//       .then((res) => {
//         console.log(res);
//         if (res) {
//           dispatch({
//             type: ADDBOT_SUCCESS,
//             bot: res,
//           });
//         }
//       })
//       .catch((err) => {
//         // eslint-disable-next-line no-console
//         console.log(err);
//         dispatch({
//           type: ADDBOT_ERROR,
//         });
//       });
//   };
// };

export { ADDBOT_REQUEST, ADDBOT_SUCCESS, ADDBOT_ERROR };
