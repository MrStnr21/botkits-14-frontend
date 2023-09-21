/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router';

import { useMediaQuery } from '@mui/material';

import styles from './more-mybot.module.scss';

import NotificationSettingsIcon from '../../icons/notification-settings';
import CopyBotIcon from '../../icons/copy-bot';
import TrashIcon from '../../icons/trash';
import CloseIcon from '../../icons/close';
import ShareIcon from '../../icons/share';
import EditIcon from '../../icons/edit';
import LinkIcon from '../../icons/link';
import InfoIcon from '../../icons/info';

import { POPUP_ITEM } from '../../../utils/constants';
import routesUrl from '../../../utils/routesData';

import SwitchBotMenuPopup from './SwitchBotMenuPopup';

interface IMoreMybotPopup {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  idMyBot?: string;
}

const MoreMybotPopup: FC<IMoreMybotPopup> = ({
  setIsOpen,
  idMyBot = '2222222',
}): JSX.Element => {
  const matches = useMediaQuery('(max-width: 420px)');
  // м.б. отдавать наружу выбор пункта? хз хз..
  const [itemSelected, setItemSelected] = useState<POPUP_ITEM>(
    POPUP_ITEM.DEFAULT
  );
  const [isPopupItemOpen, setIsPopupItemOpen] = useState(false);

  const selectItem = (item: POPUP_ITEM) => {
    setItemSelected(item); // записали текущий выбор
    setIsPopupItemOpen(true); // открыли попап
  };

  const navigate = useNavigate();
  const copyBot = () => {
    // eslint-disable-next-line no-console
    console.log(`Перепиши id cebe на листочек ${idMyBot}`);
    navigate(routesUrl.addBot);
    setIsOpen(false); // выпадающее меню закрыли
  };
  const deleteBot = () => {
    // eslint-disable-next-line no-console
    console.log(
      `Бот ${idMyBot} будет мстить! Удалять мы его конечно же не будем.. ахахаха`
    );
    setIsOpen(false); // выпадающее меню закрыли
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li onClick={copyBot} className={styles.item}>
            <CopyBotIcon color="#A6B3C9" />
            <p className={styles.text}>
              {!matches ? 'Копировать бота' : 'Копировать'}
            </p>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.SHARE)}
            className={styles.item}
          >
            <ShareIcon color="#A6B3C9" />
            <p className={styles.text}>Общий доступ</p>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.RENAME)}
            className={styles.item}
          >
            <EditIcon color="#A6B3C9" />
            <p className={styles.text}>Переименовать</p>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.LINK)}
            className={`${styles.item} ${styles.flexItem}`}
          >
            <LinkIcon color="#A6B3C9" />
            <p className={styles.text}>Получить ссылку</p>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.INFO)}
            className={styles.item}
          >
            <InfoIcon color="#A6B3C9" />
            <p className={styles.text}>Информация</p>
          </li>
          <li
            onClick={() => selectItem(POPUP_ITEM.NOTIFSETT)}
            className={styles.item}
          >
            <NotificationSettingsIcon color="#A6B3C9" />
            <p className={styles.text}>Настройка уведомлений</p>
          </li>
          <li className={styles.item} onClick={deleteBot}>
            <TrashIcon color="#A6B3C9" />
            <p className={styles.text}>Удалить</p>
          </li>
          <li onClick={() => setIsOpen(false)} className={styles.item}>
            <CloseIcon color="#A6B3C9" />
            <p className={styles.text}>Отмена</p>
          </li>
        </ul>
      </div>
      {isPopupItemOpen && (
        <SwitchBotMenuPopup
          itemSelected={itemSelected}
          setIsPopupItemOpen={setIsPopupItemOpen}
          idMyBot={idMyBot}
        />
      )}
    </>
  );
};

export default MoreMybotPopup;
