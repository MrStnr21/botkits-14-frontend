import { Dispatch, SetStateAction, forwardRef, useState } from 'react';

import styles from './bot-actions-menu.module.scss';

import { TBot } from '../../../../services/types/bot';
import useModal from '../../../../services/hooks/use-modal';
import { copyBotAction } from '../../../../services/actions/bots/addBot';
import { deleteBotAction } from '../../../../services/actions/bots/deleteBot';
import { useAppDispatch } from '../../../../services/hooks/hooks';
import Menu from '../../../../ui/menus/menu/menu';
import PopupRouter from '../popup-router';
import { BotActionValue, BotActionsOption, botActions } from '../utils';

interface IBotActionsMenu {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  bot: TBot;
}

type Ref = HTMLDivElement;

const BotActionsMenu = forwardRef<Ref, IBotActionsMenu>(
  ({ setIsOpen, bot }, ref) => {
    const dispatch = useAppDispatch();
    const [action, setAction] = useState<BotActionValue>();
    const { isModalOpen, closeModal, openModal } = useModal();

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
          setAction(value);
          openModal();
          break;
        default:
          setIsOpen(false);
      }
    };

    return (
      <>
        <Menu
          options={botActions}
          onItemClick={(option) => handleBotAction(option as BotActionsOption)}
          layoutClassName={styles.layout}
          itemClassName={styles.item}
          iconClassName={styles.icon}
          ref={ref}
        />
        {isModalOpen && action && (
          <PopupRouter action={action} close={closeModal} bot={bot} />
        )}
      </>
    );
  }
);

export default BotActionsMenu;
