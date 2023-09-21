import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import CloseIcon from '../../icons/close';
import stylesNotification from './notification-popup.module.scss';
import Notifications from '../../icons/Notifications/Notifications';

interface INotificationPopup {
  isOpen: boolean;
  setIsNotificationOpened: Dispatch<SetStateAction<boolean>>;
}
const NotificationPopup: FC<INotificationPopup> = ({
  isOpen,
  setIsNotificationOpened,
}) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };
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

            <p className={stylesNotification.title}>Уведомления</p>
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
            className={
              activeTab === 'tab1'
                ? `${stylesNotification.tab1} ${stylesNotification.tab1_active}`
                : stylesNotification.tab1
            }
            onClick={handleTab1}
          >
            Новости сервиса
          </div>
          <div
            className={
              activeTab === 'tab2'
                ? `${stylesNotification.tab2} ${stylesNotification.tab2_active}`
                : stylesNotification.tab1
            }
            onClick={handleTab2}
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