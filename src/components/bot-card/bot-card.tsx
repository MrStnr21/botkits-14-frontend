/* eslint-disable no-underscore-dangle */
import { FC, useRef, useState } from 'react';

import { useNavigate } from 'react-router';
import styles from './bot-card.module.scss';

import BotActionsMenu from '../popups/bot-actions-popups/bot-actions-menu/bot-actions-menu';
import Typography from '../../ui/typography/typography';
import { TBot } from '../../services/types/bot';
import Icon from '../../ui/icon/icon';
import messengerIcons from './utils';
import routesUrl from '../../utils/routesData';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';

export interface IBotCard {
  bot: TBot;
}

const BotCard: FC<IBotCard> = ({ bot }) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => setIsActive(false),
    buttonRef
  );

  return (
    <div className={styles.card}>
      <div
        className={styles.wrapper}
        onClick={() => {
          // eslint-disable-next-line no-underscore-dangle
          navigate(`/${routesUrl.botBuilder}?id=${bot._id}&type=custom`);
        }}
      >
        <Icon
          extraClass={styles.icon}
          icon={
            bot.messengers[0]
              ? messengerIcons[bot.messengers[0]!.name]
              : 'xCircle'
          }
          isColored={false}
        />
        <div className={styles.name_box}>
          <Typography tag="p" fontFamily="secondary" className={styles.name}>
            {bot.title}
          </Typography>
        </div>
      </div>
      <button
        type="button"
        className={styles.more_button}
        onClick={() => setIsActive(!isActive)}
        aria-label="Меню настроек бота"
        ref={buttonRef}
      />
      {isActive && (
        <BotActionsMenu setIsOpen={setIsActive} bot={bot} ref={menuRef} />
      )}
    </div>
  );
};

export default BotCard;
