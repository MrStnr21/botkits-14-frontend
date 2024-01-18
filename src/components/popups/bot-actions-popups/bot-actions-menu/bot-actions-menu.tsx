import { Dispatch, SetStateAction, forwardRef } from 'react';

import styles from './bot-actions-menu.module.scss';

import { TBot } from '../../../../services/types/bot';
import { copyBotAction } from '../../../../services/actions/bots/addBot';
import { deleteBotAction } from '../../../../services/actions/bots/deleteBot';
import { useAppDispatch } from '../../../../services/hooks/hooks';
import Menu from '../../../../ui/menus/menu/menu';
import { BotActionValue, BotActionsOption, botActions } from '../utils';

interface IBotActionsMenu {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  bot: TBot;
  handleActionSelect: (value: BotActionValue) => void;
}

type Ref = HTMLDivElement;

const BotActionsMenu = forwardRef<Ref, IBotActionsMenu>(
  ({ setIsOpen, bot, handleActionSelect }, ref) => {
    const dispatch = useAppDispatch();

    const copyBot = (botId: TBot['_id']) => {
      dispatch(copyBotAction(botId));
    };

    const deleteBot = (botId: TBot['_id']) => {
      dispatch(deleteBotAction(botId));
    };

    const handleBotAction = (option: BotActionsOption) => {
      const { value } = option;
      switch (value) {
        case 'copy':
          // eslint-disable-next-line no-underscore-dangle
          copyBot(bot._id);
          setIsOpen(false);
          break;
        case 'delete':
          // eslint-disable-next-line no-underscore-dangle
          deleteBot(bot._id);
          setIsOpen(false);
          break;
        case 'share':
        case 'rename':
        case 'getLink':
        case 'getInfo':
        case 'setNotifications':
          handleActionSelect(value);
          break;
        default:
          setIsOpen(false);
      }
    };

    return (
      <Menu
        options={botActions}
        onItemClick={(option) => handleBotAction(option as BotActionsOption)}
        layoutClassName={styles.layout}
        itemClassName={styles.item}
        iconClassName={styles.icon}
        ref={ref}
      />
    );
  }
);

export default BotActionsMenu;
