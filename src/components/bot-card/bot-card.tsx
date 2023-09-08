// to do: BotCard
// https://trello.com/c/71AlZXrG/10-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%B1%D0%BE%D1%82%D0%B0-botcard

import { FC, useState } from 'react';

import stylesBotCard from './bot-card.module.scss';
import tg from '../../images/icon/40x40/telegram/default.svg';

export interface IBotCard {
  platform_icon: any;
  bot_name: any;
}

const BotCard: FC<IBotCard> = ({
  platform_icon = tg,
  bot_name = 'Название бота',
}): JSX.Element => {
  const [moreBoxStyle, setMoreBoxStyle] = useState(stylesBotCard.more_box);

  const moreButtonClickHandler = () => {
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
      <div className={moreBoxStyle}>Заглушка под меню</div>
    </div>
  );
};

export default BotCard;
