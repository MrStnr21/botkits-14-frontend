import { FC } from 'react';
import styles from './bot.module.scss';
import { ReactComponent as MoreButtonIcon } from '../../images/icon/24x24/common/more.svg';
import { ReactComponent as TelegramIcon } from '../../images/icon/40x40/telegram/default.svg';

import useMediaQuery from '../../services/hooks/use-media-query';

interface IBot {
  text: string;
  onClick?: (e: any) => void;
}

const Bot: FC<IBot> = ({ text, onClick }) => {
  const matchesTablet = useMediaQuery('(max-width: 768px)');
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.icons}>
        {matchesTablet ? (
          <TelegramIcon width={40} height={40} />
        ) : (
          <TelegramIcon width={52} height={52} />
        )}
        <button type="button" className={styles.buttonMore}>
          <MoreButtonIcon />
        </button>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Bot;
