import {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  MouseEvent,
  useCallback,
} from 'react';

import { useMediaQuery } from '@mui/material';

import Notifications from '../../icons/Notifications/Notifications';
import CloseIcon from '../../icons/Close/CloseIcon';

import stylesNotification from './notification-popup.module.scss';
import Typography from '../../../ui/typography/typography';

interface INotificationPopup {
  isOpen: boolean;
  setIsNotificationOpened: Dispatch<SetStateAction<boolean>>;
}
const NotificationPopup: FC<INotificationPopup> = ({
  isOpen,
  setIsNotificationOpened,
}): JSX.Element => {
  const [activeTab, setActiveTab] = useState('news');
  const handleTabClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setActiveTab(target.id);
  }, []);
  const matches = useMediaQuery('(max-width: 520px)');

  return (
    <div
      className={
        isOpen ? stylesNotification.popup : stylesNotification.popup_hidden
      }
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsNotificationOpened(false);
        }
      }}
    >
      <div className={stylesNotification.container}>
        <div className={stylesNotification.header}>
          <div className={stylesNotification.wrapper}>
            <Notifications number={2} color="#060c23" />

            <Typography
              tag="p"
              fontFamily="secondary"
              className={stylesNotification.title}
            >
              Уведомления
            </Typography>
          </div>
          {!matches && (
            <button
              type="button"
              className={stylesNotification.close_btn}
              onClick={() => setIsNotificationOpened(false)}
            >
              <CloseIcon color="#d7deea" width={24} height={24} />
            </button>
          )}
        </div>
        <div className={stylesNotification.tabs}>
          <div
            id="news"
            className={`${stylesNotification.tab} ${
              activeTab === 'news' ? stylesNotification.active : ''
            }`}
            onClick={(e) => handleTabClick(e)}
          >
            Новости сервиса
          </div>
          <div
            id="log"
            className={`${stylesNotification.tab} ${
              activeTab === 'log' ? stylesNotification.active : ''
            }`}
            onClick={(e) => handleTabClick(e)}
          >
            Лог событий
          </div>
        </div>
        <div>
          {activeTab === 'tab1' ? (
            <div className="FirstTab" />
          ) : (
            <div className="FirstTab" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
