import { FC, useState } from 'react';

import styles from './bot-card.module.scss';

import tg from '../../images/icon/40x40/telegram/default.svg';

import MoreMybotPopup from '../popups/more-mybot/more-mybot';
import Typography from '../../ui/typography/typography';
import { TBot } from '../../services/types/bot';

export interface IBotCard {
  bot: TBot;
  platform_icon: string;
  // onClick: (id: string) => void;
}

const BotCard: FC<IBotCard> = ({ platform_icon = tg, bot }): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.card}>
      <img className={styles.icon} src={platform_icon} alt="иконка" />
      <div
        className={styles.more_button}
        onClick={() => setIsActive(!isActive)}
        aria-label="Меню настроек бота"
      />
      <div className={styles.name_box}>
        <Typography tag="p" fontFamily="secondary" className={styles.name}>
          {bot.title}
        </Typography>
      </div>
      {
        // eslint-disable-next-line no-underscore-dangle
        isActive && <MoreMybotPopup setIsOpen={setIsActive} idMyBot={bot._id} />
      }
    </div>
  );
};

export default BotCard;
