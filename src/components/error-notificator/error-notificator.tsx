import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../services/hooks/hooks';
import ErrorNotification from '../error-notification/error-notification';
import styles from './error-notificator.module.scss';

const ErrorNotificator = () => {
  const { data } = useAppSelector((s) => s.errors);
  const ref = useRef<HTMLDivElement>(null);

  const notifications = data.map((item) => (
    <ErrorNotification key={item.id} {...item} />
  ));

  useEffect(() => {
    ref.current?.style.setProperty('height', `${107 * data.length}px`);
  }, [ref.current?.clientHeight, data.length]);
  return createPortal(
    <div ref={ref} className={styles.container}>
      {notifications}
    </div>,
    document.querySelector('#errors') as HTMLElement
  );
};

export default ErrorNotificator;
