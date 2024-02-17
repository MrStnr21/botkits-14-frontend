import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { useMediaQuery } from '@mui/material';

import { useDraggable } from 'react-use-draggable-scroll';
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
  const [isExpanded, setIsExpanded] = useState(true);
  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  const navigate = useNavigate();

  const matches = useMediaQuery(`(max-width: 860px)`);

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
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Cвернуть' : 'Все'}
          </button>
        )}
      </div>
      <ul
        ref={ref}
        {...events}
        className={`${styles.list}  ${isExpanded ? '' : styles.list_hidden}`}
      >
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
