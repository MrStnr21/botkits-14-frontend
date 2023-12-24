/* eslint-disable no-underscore-dangle */
import { FC, useState } from 'react';

import stylesBotCard from './bot-card.module.scss';

import MoreMybotPopup from '../popups/more-mybot/more-mybot';
import Typography from '../../ui/typography/typography';
import { TBot } from '../../services/types/bot';
import Icon from '../../ui/icon/icon';
import messengerIcons from './utils';

export interface IBotCard {
  bot: TBot;
}

const BotCard: FC<IBotCard> = ({ bot }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={stylesBotCard.card}>
      <Icon
        extraClass={stylesBotCard.icon}
        icon={messengerIcons[bot.messengers[0].name]}
        isColored={false}
      />
      <div
        className={stylesBotCard.more_button}
        onClick={() => setIsActive(!isActive)}
        aria-label="Меню настроек бота"
      />
      <div className={stylesBotCard.name_box}>
        <Typography
          tag="p"
          fontFamily="secondary"
          className={stylesBotCard.name}
        >
          {bot.title}
        </Typography>
      </div>
      {isActive && <MoreMybotPopup setIsOpen={setIsActive} bot={bot} />}
    </div>
  );
};

export default BotCard;
