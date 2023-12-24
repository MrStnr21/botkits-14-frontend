import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useMediaQuery } from '@mui/material';

import styles from './my-bots.module.scss';

import ButtonAddBot from '../../../ui/buttons/button-add-bot/button-add-bot';

import BotCard from '../../bot-card/bot-card';

import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getBotsAction } from '../../../services/actions/bots/getBot';

import routesUrl from '../../../utils/routesData';

import { getBotsSel } from '../../../utils/selectorData';
import Typography from '../../../ui/typography/typography';

const MyBots: FC = (): JSX.Element => {
  const [isHidden, setIsHidden] = useState(false);

  const { bots } = useAppSelector(getBotsSel);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const matches = useMediaQuery('(max-width: 1410px)');

  const addBot = () => {
    navigate(routesUrl.addBot);
  };

  useEffect(() => {
    dispatch(getBotsAction());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Typography
          tag="h1"
          fontFamily="secondary"
          className={styles.header__text}
        >
          Мои боты
        </Typography>
        {matches && (
          <button
            className={styles.header__button}
            type="button"
            onClick={() => setIsHidden(!isHidden)}
          >
            {isHidden ? 'Все' : 'Cвернуть'}
          </button>
        )}
      </div>
      <ul className={`${styles.list}  ${isHidden ? styles.list_hidden : ''}`}>
        {bots.map((bot, index) => (
          <li key={bot.title + +index} className={styles.item}>
            <BotCard bot={bot} />
          </li>
        ))}
        <li className={styles.buttonAddbot}>
          <ButtonAddBot onClick={addBot}>Добавить бота</ButtonAddBot>
        </li>
      </ul>
    </div>
  );
};

export default MyBots;
