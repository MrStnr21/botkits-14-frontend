import { createPortal } from 'react-dom';
import { useAppSelector } from '../../services/hooks/hooks';
import ErrorNotification from '../../ui/error-notification/error-notification';
import styles from './error-notificator.module.scss';
import { getErrorsSel } from '../../utils/selectorData';

const ErrorNotificator = () => {
  const { data } = useAppSelector(getErrorsSel);

  const notifications = data.map((item) => (
    <ErrorNotification key={item.id} {...item} />
  ));

  return createPortal(
    <div className={styles.container}>{notifications}</div>,
    document.querySelector('#errors') as HTMLElement
  );
};

export default ErrorNotificator;
