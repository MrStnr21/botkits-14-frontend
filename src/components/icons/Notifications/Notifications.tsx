import { FC } from 'react';
import styles from './Notifications.module.css';
import Typography from '../../../ui/typography/typography';

interface INotifications {
  number?: number;
  color?: string;
  onClick?: () => void;
}

const Notifications: FC<INotifications> = ({
  number,
  color = '#CCD4E0',
  onClick,
}) => (
  <div className={styles.container} onClick={onClick} id="notification">
    {number && number > 0 ? (
      <Typography tag="p" className={styles.text}>
        {number}
      </Typography>
    ) : null}
    <svg
      width="25"
      height="29"
      viewBox="0 0 25 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="notification"
    >
      <path
        d="M18 13C18 11.4087 17.3679 9.88258 16.2426 8.75736C15.1174 7.63214 13.5913 7 12 7C10.4087 7 8.88258 7.63214 7.75736 8.75736C6.63214 9.88258 6 11.4087 6 13C6 20 3 22 3 22H21C21 22 18 20 18 13Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="notification"
      />
      <path
        d="M13.73 26C13.5542 26.3031 13.3019 26.5547 12.9982 26.7295C12.6946 26.9044 12.3504 26.9965 12 26.9965C11.6496 26.9965 11.3054 26.9044 11.0018 26.7295C10.6982 26.5547 10.4458 26.3031 10.27 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        id="notification"
      />
      <circle
        cx="18"
        cy="7"
        r="7"
        fill="#FF5555"
        style={{ display: number && number > 0 ? 'block' : 'none' }}
        id="notification"
      />
    </svg>
  </div>
);

export default Notifications;
