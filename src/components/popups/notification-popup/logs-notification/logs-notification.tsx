import { FC } from 'react';
import styles from './logs-notification.module.scss';
import getTimeAgo from '../../../../utils/getTimeAgo';
import Icon from '../../../../ui/icon/icon';

type TLogsNotificationProps = {
  _id: string;
  status: string;
  title: string;
  text?: string;
  date: string;
  remove: (id: string) => void;
};

const LogsNotification: FC<TLogsNotificationProps> = ({
  _id,
  status,
  title,
  text,
  date,
  remove,
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <Icon
          icon="rocket"
          isColored
          extraClass={`${styles.icon} ${styles[status]}`}
        />
        <p className={styles.time}>{getTimeAgo(new Date(date))}</p>
      </div>
      <h4 className={styles.title}>{title}</h4>
      {text && <p className={styles.text}>{text}</p>}
      <button
        onClick={() => remove(_id)}
        className={styles.button}
        type="button"
      >
        <Icon
          icon="close"
          isColored
          extraClass={`${styles.icon} ${styles['close-icon']}`}
        />
      </button>
    </article>
  );
};

export default LogsNotification;
