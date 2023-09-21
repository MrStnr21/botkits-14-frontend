/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import CopyBotIcon from '../../icons/copy-bot';
import ShareIcon from '../../icons/share';
import EditIcon from '../../icons/edit';
import LinkIcon from '../../icons/link';
import InfoIcon from '../../icons/info';
import NotificationSettingsIcon from '../../icons/notification-settings';
import TrashIcon from '../../icons/trash';
import CloseIcon from '../../icons/close';
import styles from './more-mybot.module.scss';
import { POPUP_ITEM } from '../../../utils/constants';
import PopupMoreMyBot from './popup';

interface IMoreMybotPopup {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MoreMybotPopup: FC<IMoreMybotPopup> = ({ setIsOpen }) => {
  const matches = useMediaQuery('(max-width: 420px)');
  // м.б. отдавать наружу выбор пункта? хз хз..
  const [itemSelected, setItemSelected] = useState<POPUP_ITEM>(
    POPUP_ITEM.DEFAULT
  );

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li
            onClick={() => setItemSelected(POPUP_ITEM.COPY)}
            className={styles.item}
          >
            <CopyBotIcon color="#A6B3C9" />
            <p className={styles.text}>
              {!matches ? 'Копировать бота' : 'Копировать'}
            </p>
          </li>
          <li
            onClick={() => setItemSelected(POPUP_ITEM.SHARE)}
            className={styles.item}
          >
            <ShareIcon color="#A6B3C9" />
            <p className={styles.text}>Общий доступ</p>
          </li>
          <li
            onClick={() => setItemSelected(POPUP_ITEM.RENAME)}
            className={styles.item}
          >
            <EditIcon color="#A6B3C9" />
            <p className={styles.text}>Переименовать</p>
          </li>
          <li
            onClick={() => setItemSelected(POPUP_ITEM.GETLINK)}
            className={`${styles.item} ${styles.flexItem}`}
          >
            <LinkIcon color="#A6B3C9" />
            <p className={styles.text}>Получить ссылку</p>
          </li>
          <li
            onClick={() => setItemSelected(POPUP_ITEM.INFO)}
            className={styles.item}
          >
            <InfoIcon color="#A6B3C9" />
            <p className={styles.text}>Информация</p>
          </li>
          <li
            onClick={() => setItemSelected(POPUP_ITEM.NOTIFSETT)}
            className={styles.item}
          >
            <NotificationSettingsIcon color="#A6B3C9" />
            <p className={styles.text}>Настройка уведомлений</p>
          </li>
          <li className={styles.item}>
            <TrashIcon color="#A6B3C9" />
            <p className={styles.text}>Удалить</p>
          </li>
          <li onClick={() => setIsOpen(false)} className={styles.item}>
            <CloseIcon color="#A6B3C9" />
            <p className={styles.text}>Отмена</p>
          </li>
        </ul>
      </div>
      <PopupMoreMyBot itemSelected={itemSelected} />
    </>
  );
};

export default MoreMybotPopup;
