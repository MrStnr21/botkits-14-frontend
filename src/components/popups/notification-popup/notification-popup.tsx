/* eslint-disable no-underscore-dangle */
import { Dispatch, FC, SetStateAction, useState } from 'react';

import MenuInformation from '../../../ui/menus/menu-information/menu-information';
import Notifications from '../../icons/Notifications/Notifications';
import CloseIcon from '../../icons/Close/CloseIcon';

import styles from './notification-popup.module.scss';
import Typography from '../../../ui/typography/typography';
import LogsNotification from './logs-notification/logs-notification';
import { logNotifications } from '../../../utils/mockNotification';
import linksMapping from './notificationLinksMapping';

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

  const removeLog = (id: string) => {
    setLogs(logs.filter((item) => item._id !== id));
  };

  return (
    <div
      className={isOpen ? styles.popup : styles.popup_hidden}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsNotificationOpened(false);
        }
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <Notifications number={2} color="#060c23" />
            <Typography tag="p" fontFamily="secondary" className={styles.title}>
              Уведомления
            </Typography>
          </div>
          <button
            type="button"
            className={styles.close_btn}
            onClick={() => setIsNotificationOpened(false)}
          >
            <CloseIcon color="#d7deea" width={24} height={24} />
          </button>
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
          <div className={styles.news} />
        ) : (
          <div className={styles.logs}>
            {logs.map((item) => (
              <LogsNotification
                key={item._id}
                remove={removeLog}
                link={item.goTo ? linksMapping[item.goTo] : ''}
                {...item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPopup;
