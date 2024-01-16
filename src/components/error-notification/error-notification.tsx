import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './error-notification.module.scss';
import Typography from '../../ui/typography/typography';
import Icon from '../../ui/icon/icon';
import { useAppDispatch } from '../../services/hooks/hooks';
import { REMOVE_ERROR } from '../../services/actions/errors/errors';

type TErrorNotificationProps = {
  message: string;
  id: string;
};

const ErrorNotification: FC<TErrorNotificationProps> = ({ message, id }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [cursorPosition, setPosition] = useState<string>('out');

  const removeNotification = () => {
    dispatch({
      type: REMOVE_ERROR,
      payload: {
        id,
      },
    });
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      e.target.classList.remove(styles.animated);
      setPosition('in');
    }
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      e.target.classList.add(styles.animated);
      setPosition('out');
    }
  };
  useEffect(() => {
    if (cursorPosition === 'out') {
      const timeout = setTimeout(() => removeNotification, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
    return () => {};
  }, [cursorPosition]);
  return createPortal(
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      className={`${styles.container} ${styles.animated}`}
    >
      <button
        type="button"
        className={styles.remove}
        onClick={removeNotification}
      >
        <Icon icon="close" isColored={false} />
      </button>
      <Typography tag="h3" className={styles.title}>
        Oops
      </Typography>
      <Typography tag="p" className={styles.message}>
        {message}
      </Typography>
    </div>,
    document.querySelector('#errors') as HTMLElement
  );
};

export default ErrorNotification;
