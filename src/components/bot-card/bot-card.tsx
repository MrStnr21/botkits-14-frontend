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
import { BotActionValue } from '../popups/bot-actions-popups/utils';
import PopupRouter from '../popups/bot-actions-popups/popup-router';
import useModal from '../../services/hooks/use-modal';

export interface IBotCard {
  bot: TBot;
}

const BotCard: FC<IBotCard> = ({ bot }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [botAction, setBotAction] = useState<BotActionValue | null>(null);
  const { isModalOpen, closeModal, openModal } = useModal();

  // для пунктов меню, требующих открытия отдельного попапа
  const onExtendedActionSelect = (value: BotActionValue) => {
    setBotAction(value);
    openModal();
  };

  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => setIsMenuActive(false),
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
        onClick={() => setIsMenuActive(!isMenuActive)}
        aria-label="Меню настроек бота"
        ref={buttonRef}
      />
      {isMenuActive && (
        <BotActionsMenu
          setIsOpen={setIsMenuActive}
          bot={bot}
          ref={menuRef}
          handleActionSelect={onExtendedActionSelect}
        />
      )}
      {isModalOpen && botAction && (
        <PopupRouter action={botAction} close={closeModal} bot={bot} />
      )}
    </div>
  );
};

export default BotCard;
