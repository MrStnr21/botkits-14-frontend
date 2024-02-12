import { FC, useState } from 'react';
import { useNavigate } from 'react-router';

import { useMediaQuery } from '@mui/material';

import styles from './my-bots.module.scss';

import ButtonAddBot from '../../../ui/buttons/button-add-bot/button-add-bot';

import BotCard from '../../bot-card/bot-card';

import routesUrl from '../../../utils/routesData';

import Typography from '../../../ui/typography/typography';
import { TBot } from '../../../services/types/bot';

type TMyBots = {
  title: string;
  bots: TBot[];
  titleStyle?: 'main' | 'secondary'; // костыль чтобы был один h1 и не сильно лезть в верстку
  hasAddBtn?: boolean;
};

const MyBots: FC<TMyBots> = ({
  title,
  bots,
  titleStyle = 'main',
  hasAddBtn = false,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const navigate = useNavigate();

  const matches = useMediaQuery('(max-width: 1410px)');

  const addBot = () => {
    navigate(routesUrl.addBot);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {titleStyle === 'main' ? (
          <Typography
            tag="h1"
            fontFamily="secondary"
            className={styles.header__text}
          >
            {title}
          </Typography>
        ) : (
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={styles.header__text}
          >
            {title}
          </Typography>
        )}

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
        {hasAddBtn && (
          <li className={styles.item}>
            <ButtonAddBot onClick={addBot}>Добавить бота</ButtonAddBot>
          </li>
        )}
        {bots.map((bot) => (
          // eslint-disable-next-line no-underscore-dangle
          <li key={bot._id} className={styles.item}>
            <BotCard bot={bot} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBots;
