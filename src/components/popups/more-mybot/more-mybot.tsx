/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router';

import { useMediaQuery } from '@mui/material';

import styles from './more-mybot.module.scss';

import NotificationSettingsIcon from '../../icons/notification-settings';
import CopyBotIcon from '../../icons/copy-bot';
import CloseIcon from '../../icons/Close/CloseIcon';
import TrashIcon from '../../icons/Trash/TrashIcon';
import ShareIcon from '../../icons/share';
import EditIcon from '../../icons/edit';
import LinkIcon from '../../icons/link';
import InfoIcon from '../../icons/info';

import { POPUP_ITEM } from '../../../utils/constants';
import routesUrl from '../../../utils/routesData';

import SwitchBotMenuPopup from './switch-bot-menu-popup';
import useModal from '../../../services/hooks/use-modal';
import Typography from '../../../ui/typography/typography';
import { TBot } from '../../../services/types/bot';

interface IMoreMybotPopup {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  bot: TBot;
}

const MoreMybotPopup: FC<IMoreMybotPopup> = ({ setIsOpen, bot }) => {
  const matches = useMediaQuery('(max-width: 420px)');
  // м.б. отдавать наружу выбор пункта? хз хз..
  const [itemSelected, setItemSelected] = useState<POPUP_ITEM>(
    POPUP_ITEM.DEFAULT
  );
  const { isModalOpen, closeModal, openModal } = useModal();

  const selectItem = (item: POPUP_ITEM) => {
    setItemSelected(item); // записали текущий выбор
    openModal(); // открыли попап
  };

  const navigate = useNavigate();
  const copyBot = () => {
    navigate(routesUrl.addBot);
    setIsOpen(false); // выпадающее меню закрыли
  };
  const deleteBot = () => {
    setIsOpen(false); // выпадающее меню закрыли
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li onClick={copyBot} className={styles.item}>
            <CopyBotIcon color="#A6B3C9" />
            <Typography tag="p">
              {!matches ? 'Копировать бота' : 'Копировать'}
            </Typography>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.SHARE)}
            className={styles.item}
          >
            <ShareIcon color="#A6B3C9" />
            <Typography tag="p">Общий доступ</Typography>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.RENAME)}
            className={styles.item}
          >
            <EditIcon color="#A6B3C9" />
            <Typography tag="p">Переименовать</Typography>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.LINK)}
            className={`${styles.item} ${styles.flexItem}`}
          >
            <LinkIcon color="#A6B3C9" />
            <Typography tag="p">Получить ссылку</Typography>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.INFO)}
            className={styles.item}
          >
            <InfoIcon color="#A6B3C9" />
            <Typography tag="p">Информация</Typography>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.NOTIFSETT)}
            className={styles.item}
          >
            <NotificationSettingsIcon color="#A6B3C9" />
            <Typography tag="p">Настройка уведомлений</Typography>
          </li>
          <li className={styles.item} onClick={deleteBot}>
            <TrashIcon color="#A6B3C9" />
            <Typography tag="p">Удалить</Typography>
          </li>
          <li onClick={() => setIsOpen(false)} className={styles.item}>
            <CloseIcon color="#A6B3C9" />
            <Typography tag="p">Отмена</Typography>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <SwitchBotMenuPopup
          itemSelected={itemSelected}
          setIsPopupItemOpen={closeModal}
          bot={bot}
        />
      )}
    </>
  );
};

export default MoreMybotPopup;
