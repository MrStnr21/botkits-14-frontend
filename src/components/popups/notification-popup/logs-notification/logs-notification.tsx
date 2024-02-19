import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './logs-notification.module.scss';
import getTimeAgo from '../../../../utils/getTimeAgo';
import Icon from '../../../../ui/icon/icon';

type TLogsNotificationProps = {
  _id: string;
  status: string;
  title: string;
  text?: string;
  date: string;
  link?: string;
  remove: (id: string) => void;
};

type TWrapper = {
  children: React.ReactNode;
  link?: string;
};

const Wrapper: FC<TWrapper> = ({ link, children }) => {
  if (link) {
    return (
      <Link to={link} className={styles.link}>
        {children}
      </Link>
    );
  }
  return <div>{children}</div>;
};

const LogsNotification: FC<TLogsNotificationProps> = ({
  _id,
  status,
  title,
  text,
  date,
  link,
  remove,
}) => {
  return (
    <article className={styles.container}>
      <Wrapper link={link}>
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
      </Wrapper>
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
