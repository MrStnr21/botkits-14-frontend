/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { FC, useRef } from 'react';
import Icon from '../../../ui/icon/icon';
import styles from './status-icon.module.scss';
import Typography from '../../../ui/typography/typography';

const iconMap = {
  started: { icon: 'syncDone' as const, label: 'запущен' },
  error: { icon: 'slash' as const, label: 'ошибка' },
  updating: { icon: 'syncUpdate' as const, label: 'обновляется' },
  editing: { icon: 'dropdownEdit' as const, label: 'создается' },
};

type TStatusIconProps = {
  status: 'started' | 'error' | 'updating' | 'editing';
};

const StatusIcon: FC<TStatusIconProps> = ({ status }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onOver = () => {
    ref.current?.classList.remove(styles.out);
    ref.current?.classList.add(styles.in);
  };
  const onOut = () => {
    ref.current?.classList.remove(styles.in);
    ref.current?.classList.add(styles.out);
  };
  return (
    <div
      ref={ref}
      className={styles.container}
      onMouseOver={onOver}
      onMouseOut={onOut}
    >
      <Icon
        icon={iconMap[status].icon}
        extraClass={`${styles.icon} ${styles[status]}`}
        isColored
      />
      <Typography tag="span" className={styles.caption}>
        {iconMap[status].label}
      </Typography>
    </div>
  );
};

export default StatusIcon;
