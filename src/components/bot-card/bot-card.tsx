/* eslint-disable no-underscore-dangle */
import { FC, useState } from 'react';

import { useNavigate } from 'react-router';
import styles from './bot-card.module.scss';

import MoreMybotPopup from '../popups/more-mybot/more-mybot';
import Typography from '../../ui/typography/typography';
import { TBot } from '../../services/types/bot';
import Icon from '../../ui/icon/icon';
import messengerIcons from './utils';
import routesUrl from '../../utils/routesData';

export interface IBotCard {
  bot: TBot;
}

const BotCard: FC<IBotCard> = ({ bot }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div
        className={styles.more_button}
        onClick={() => setIsActive(!isActive)}
        aria-label="Меню настроек бота"
      />
      <div
        className={styles.wrapper}
        onClick={() => {
          // eslint-disable-next-line no-underscore-dangle
          navigate(`/${routesUrl.botBuilder}?id=${bot._id}&type=custom`);
        }}
      >
        {bot.messengers[0] && (
          <Icon
            extraClass={styles.icon}
            icon={messengerIcons[bot.messengers[0].name]}
            isColored={false}
          />
        )}
        <div className={styles.name_box}>
          <Typography tag="p" fontFamily="secondary" className={styles.name}>
            {bot.title}
          </Typography>
        </div>
      </div>
      {isActive && <MoreMybotPopup setIsOpen={setIsActive} bot={bot} />}
    </div>
  );
};

export default BotCard;
