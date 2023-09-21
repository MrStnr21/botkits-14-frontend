import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useMediaQuery } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';

import styles from './my-bots.module.scss';

import ButtonAddBot from '../../../ui/buttons/button-add-bot/button-add-bot';

import BotCard from '../../bot-card/bot-card';

import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getBotsAction } from '../../../services/actions/bots/getBot';

import { getAccessToken } from '../../../auth/authService';

import routesUrl from '../../../utils/routesData';

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

const MyBots: FC = (): JSX.Element => {
  const [isHidden, SetIsHidden] = useState(false);

  const bots: any = useAppSelector((store) => store.getBots.bot) || [];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = getAccessToken();

  const matches = useMediaQuery('(max-width: 1410px)');

  const addBot = () => {
    navigate(routesUrl.addBot);
  };

  useEffect(() => {
    dispatch(getBotsAction(token));
  }, [dispatch]);

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
              // eslint-disable-next-line no-underscore-dangle
              bot_id={bot._id}
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
