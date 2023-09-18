import { FC, useState } from 'react';

import stylesBotCard from './bot-card.module.scss';

import tg from '../../images/icon/40x40/telegram/default.svg';
import MenuBot from '../../ui/menus/menu-bot/menu-bot';

export interface IBotCard {
  platform_icon: string;
  bot_name: string;
}

const BotCard: FC<IBotCard> = ({
  platform_icon = tg,
  bot_name = 'Название бота',
}): JSX.Element => {
  const [moreBoxStyle, setMoreBoxStyle] = useState(stylesBotCard.more_box);
  const [isActive, SetIsActive] = useState(false);

  const moreButtonClickHandler = () => {
    SetIsActive(!isActive);
    if (moreBoxStyle === stylesBotCard.more_box) {
      setMoreBoxStyle(`${moreBoxStyle} ${stylesBotCard.more_box__active}`);
    } else {
      setMoreBoxStyle(stylesBotCard.more_box);
    }
    console.log(moreBoxStyle);
  };

  return (
    <div className={stylesBotCard.card}>
      <img className={stylesBotCard.icon} src={platform_icon} alt="иконка" />
      <div
        className={stylesBotCard.more_button}
        onClick={moreButtonClickHandler}
      />
      <div className={stylesBotCard.name_box}>
        <p className={stylesBotCard.name}>{bot_name}</p>
      </div>
      <div className={moreBoxStyle}>
        <MenuBot
          isActive={isActive}
          editFunction={() => console.log('NotFunction')}
          size="large"
        />
      </div>
    </div>
  );
};

export default BotCard;
