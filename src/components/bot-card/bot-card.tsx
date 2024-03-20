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
import BotStatus from './bot-status/bot-status';
import { shareBotApi } from '../../api/user';
import { deleteBotAction } from '../../services/actions/bots/deleteBot';
import { renameBotAction } from '../../services/actions/bots/renameBot';
import { createAddErrorAction } from '../../services/actions/errors/errors';
import { useAppDispatch } from '../../services/hooks/hooks';
import { copyBotAction } from '../../services/actions/bots/addBot';

export interface IBotCard {
  bot: TBot;
}

const BotCard: FC<IBotCard> = ({ bot }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [botAction, setBotAction] = useState<BotActionValue | null>(null);
  const { isModalOpen, closeModal, openModal } = useModal();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => setIsMenuActive(false),
    buttonRef
  );

  // Действия с ботом
  const handleShare = (email: string) => {
    shareBotApi(email)
      .catch(() =>
        dispatch(createAddErrorAction('Не получилось поделиться ботом'))
      )
      .finally(() => closeModal());
  };

  const handleRename = (value: TBot['title']) => {
    // eslint-disable-next-line no-underscore-dangle
    dispatch(renameBotAction(bot._id, value, bot.permission));
    closeModal();
  };

  const handleDelete = () => {
    // eslint-disable-next-line no-underscore-dangle
    dispatch(deleteBotAction(bot._id));
    closeModal();
  };

  const copyBot = () => {
    dispatch(copyBotAction(bot._id));
  };

  // Действия при выбору пункта меню
  const onActionSelect = (action: BotActionValue) => {
    if (action === 'copy') {
      copyBot();
    } else {
      setBotAction(action);
      openModal();
    }
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.wrapper}
        onClick={() => {
          // eslint-disable-next-line no-underscore-dangle
          navigate(`/${routesUrl.botBuilder}?id=${bot._id}&type=custom`);
        }}
      >
        <div className={styles.header}>
          <Icon
            extraClass={styles.icon}
            icon={
              bot.messengers[0]
                ? messengerIcons[bot.messengers[0]!.name]
                : 'xCircle'
            }
            isColored={false}
          />
          <BotStatus status="editing" />
        </div>
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
          ref={menuRef}
          handleActionSelect={onActionSelect}
        />
      )}
      {isModalOpen && botAction && (
        <PopupRouter
          action={botAction}
          close={closeModal}
          bot={bot}
          handlers={{ handleShare, handleRename, handleDelete }}
        />
      )}
    </div>
  );
};

export default BotCard;
