import { FC } from 'react';
import { useLocation } from 'react-router';
import styles from './crumb.module.scss';

type TCrumbProps = {
  to: string;
  label: string;
  index: number;
};

const Crumb: FC<TCrumbProps> = ({ to, label, index }) => {
  const location = useLocation();

  const containerCLass =
    location.pathname === to ? styles.container_active : styles.container;
  return (
    <p className={containerCLass}>
      <span className={styles.step}>
        {index} Шаг {'>'}
      </span>
      <span className={styles.label}>{label}</span>
    </p>
  );
};

export default Crumb;
