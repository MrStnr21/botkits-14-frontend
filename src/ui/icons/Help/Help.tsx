import { FC } from 'react';
import styles from './Help.module.css';

const Help: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.container}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#CCD4E0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.08984 8.99999C9.32495 8.33166 9.789 7.7681 10.3998 7.40912C11.0106 7.05015 11.7287 6.91893 12.427 7.0387C13.1253 7.15848 13.7587 7.52151 14.2149 8.06352C14.6712 8.60552 14.9209 9.29151 14.9198 9.99999C14.9198 12 11.9198 13 11.9198 13"
      stroke="#CCD4E0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17H12.01"
      stroke="#CCD4E0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Help;
