import { createPortal } from 'react-dom';
import { useAppSelector } from '../../services/hooks/hooks';
import ErrorNotification from '../error-notification/error-notification';
import styles from './error-notificator.module.scss';

const ErrorNotificator = () => {
  const { data } = useAppSelector((s) => s.errors);

  const notifications = data.map((item) => (
    <ErrorNotification key={item.id} {...item} />
  ));

  return createPortal(
    <div className={styles.container}>{notifications}</div>,
    document.querySelector('#errors') as HTMLElement
  );
};

export default ErrorNotificator;
