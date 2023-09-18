// to do: MyBots
// https://trello.com/c/6gxmCXj9/23-%D0%BC%D0%BE%D0%B8-%D0%B1%D0%BE%D1%82%D1%8B

import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import styles from './my-bots.module.scss';
import TelegramIcon from '../../../images/icon/40x40/telegram/default.svg';
import ButtonAddBot from '../../../ui/buttons/button-add-bot/button-add-bot';
import BotCard from '../../bot-card/bot-card';
import useMediaQuery from '../../../services/hooks/use-media-query';
import routesUrl from '../../../utils/routesData';

const bots = [
  'Салон красоты',
  'Запись клиентов для консультации',
  'Опрос клиентов для проведения встречи',
];

const MyBots: FC = () => {
  const [isHidden, SetIsHidden] = useState(false);
  const matches = useMediaQuery('(max-width: 1410px)');

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
      <ul
        className={styles.list}
        style={
          isHidden
            ? {
                overflow: 'hidden',
                height: '200px',
              }
            : {}
        }
      >
        {bots.map((bot) => (
          <li key={uuidv4()} className={styles.item}>
            <BotCard platform_icon={TelegramIcon} bot_name={bot} />
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
