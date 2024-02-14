/* eslint-disable no-underscore-dangle */
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import MenuInformation from '../../../ui/menus/menu-information/menu-information';
import Notifications from '../../icons/Notifications/Notifications';
import CloseIcon from '../../icons/Close/CloseIcon';

import stylesNotification from './notification-popup.module.scss';
import Typography from '../../../ui/typography/typography';
import LogsNotification from './logs-notification/logs-notification';
import { logNotifications } from '../../../utils/mockNotification';

interface INotificationPopup {
  isOpen: boolean;
  setIsNotificationOpened: Dispatch<SetStateAction<boolean>>;
}
const NotificationPopup: FC<INotificationPopup> = ({
  isOpen,
  setIsNotificationOpened,
}): JSX.Element => {
  const [logs, setLogs] = useState(logNotifications.reverse());
  const [isDisabled, setIsDisabled] = useState(true);
  const matches = useMediaQuery('(max-width: 520px)');

  const removeLog = (id: string) => {
    setLogs(logs.filter((item) => item._id !== id));
  };

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
        <MenuInformation
          width={148.25}
          height={50}
          isActive={isDisabled}
          type="isNotifications"
          valueOne="Новости сервиса"
          valueTwo="Лог событий"
          onClick={() => {
            setIsDisabled(!isDisabled);
          }}
        />
        {isDisabled ? (
          <div className={stylesNotification.news} />
        ) : (
          <div className={stylesNotification.logs}>
            {logs.map((item) => (
              <LogsNotification {...item} remove={removeLog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPopup;
