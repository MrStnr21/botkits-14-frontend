import { FC } from 'react';
import { POPUP_ITEM } from '../../../utils/constants';

interface IPopupMoreMyBot {
  itemSelected: POPUP_ITEM | undefined;
}
// и вот будет некий попап который принимает пункт меню и отрисовывает.. и хорошо бы еще некий id бота отдавать
const PopupMoreMyBot: FC<IPopupMoreMyBot> = ({ itemSelected }) => {
  return <div>{itemSelected}</div>;
};

export default PopupMoreMyBot;
