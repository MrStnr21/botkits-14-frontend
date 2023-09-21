import { FC, useState } from 'react';

import stylesBotCard from './bot-card.module.scss';

import tg from '../../images/icon/40x40/telegram/default.svg';
import MoreMybotPopup from '../popups/more-mybot/more-mybot';

export interface IBotCard {
  platform_icon: string;
  bot_name: string;
  bot_id?: string;
}

const BotCard: FC<IBotCard> = ({
  platform_icon = tg,
  bot_name = 'Название бота',
  bot_id = '980809809',
}): JSX.Element => {
  const [isActive, SetIsActive] = useState(false);

  return (
    <div className={stylesBotCard.card}>
      <img className={stylesBotCard.icon} src={platform_icon} alt="иконка" />
      <div
        className={stylesBotCard.more_button}
        onClick={() => SetIsActive(!isActive)}
        aria-label="Меню настроек бота"
      />
      <div className={stylesBotCard.name_box}>
        <p className={stylesBotCard.name}>{bot_name}</p>
      </div>
      {isActive && <MoreMybotPopup setIsOpen={SetIsActive} idMyBot={bot_id} />}
    </div>
  );
};

export default BotCard;
