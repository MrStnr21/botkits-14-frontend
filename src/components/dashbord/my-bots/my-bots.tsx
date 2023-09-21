// to do: MyBots
// https://trello.com/c/6gxmCXj9/23-%D0%BC%D0%BE%D0%B8-%D0%B1%D0%BE%D1%82%D1%8B

import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
// import { useAppSelector } from '../../../services/hooks/hooks';
import styles from './my-bots.module.scss';
// import TelegramIcon from '../../../images/icon/40x40/telegram/default.svg';
import ButtonAddBot from '../../../ui/buttons/button-add-bot/button-add-bot';
import BotCard from '../../bot-card/bot-card';
import routesUrl from '../../../utils/routesData';
import { useAppSelector } from '../../../services/hooks/hooks';

import Odnoklassniki from '../../../images/icon/40x40/odnoklassniki/hover.svg';
import Telegram from '../../../images/icon/40x40/telegram/hover.svg';
import Whatsapp from '../../../images/icon/40x40/whatsapp/hover.svg';
import Facebook from '../../../images/icon/40x40/facebook/hover.svg';
import Instagram from '../../../images/icon/40x40/insta/hover.svg';
import Viber from '../../../images/icon/40x40/viber/hover.svg';
import WebSite from '../../../images/icon/40x40/web/hover.svg';
import Alisa from '../../../images/icon/40x40/alisa/hover.svg';
import VK from '../../../images/icon/40x40/vk/hover.svg';

const img: any = {
  Facebook,
  Telegram,
  Viber,
  VK,
  Odnoklassniki,
  Алиса: Alisa,
  Whatsapp,
  Instagram,
  'Веб-сайт': WebSite,
};

const MyBots: FC = () => {
  const [isHidden, SetIsHidden] = useState(false);
  const matches = useMediaQuery('(max-width: 1410px)');
  const bots: any = useAppSelector((store) => store.getBots.bot) || [];
  const navigate = useNavigate();
  const addBot = () => {
    navigate(routesUrl.addBot);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.header__text}>Мои боты</h1>
        {matches && (
          <button
            className={styles.header__button}
            type="button"
            onClick={() => SetIsHidden(!isHidden)}
          >
            {isHidden ? 'Все' : 'Cвернуть'}
          </button>
        )}
      </div>
      <ul className={`${styles.list}  ${isHidden ? styles.list_hidden : ''}`}>
        {bots.map((bot: any) => (
          <li key={uuidv4()} className={styles.item}>
            <BotCard
              platform_icon={img[bot.messenger.name]}
              bot_name={bot.botName}
            />
          </li>
        ))}
        <li key={uuidv4()} className={styles.buttonAddbot}>
          <ButtonAddBot onClick={addBot}>Добавить бота</ButtonAddBot>
        </li>
      </ul>
    </div>
  );
};

export default MyBots;
