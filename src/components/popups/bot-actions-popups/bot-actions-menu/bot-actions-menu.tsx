import { Dispatch, SetStateAction, forwardRef } from 'react';

import styles from './bot-actions-menu.module.scss';

import Menu from '../../../../ui/menus/menu/menu';
import { BotActionValue, BotActionsOption, botActions } from '../utils';

interface IBotActionsMenu {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleActionSelect: (value: BotActionValue) => void;
}

type Ref = HTMLDivElement;

const BotActionsMenu = forwardRef<Ref, IBotActionsMenu>(
  ({ setIsOpen, handleActionSelect }, ref) => {
    const handleBotAction = (option: BotActionsOption) => {
      const { value } = option;
      setIsOpen(false);
      handleActionSelect(value);
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
