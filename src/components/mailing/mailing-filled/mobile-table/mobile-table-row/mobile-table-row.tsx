import { FC } from 'react';
import styles from './mobile-table-row.module.scss';
import { ReactComponent as tgIcon } from '../../../../../images/icon/40x40/telegram/hover.svg';
import { ReactComponent as vkIcon } from '../../../../../images/icon/40x40/vk/hover.svg';
import { ReactComponent as viberIcon } from '../../../../../images/icon/40x40/viber/hover.svg';
import { ReactComponent as facebookIcon } from '../../../../../images/icon/40x40/facebook/hover.svg';
import { rows } from '../../../../../utils/mailingTable';

type TMobileTableRowProps = (typeof rows)[0];

const MobileTableRow: FC<TMobileTableRowProps> = ({
  id,
  title,
  messages,
  messenger,
  conversion,
  status,
}) => {
  const Icon = (() => {
    switch (messenger) {
      case 'Telegram': {
        return tgIcon;
      }
      case 'Viber': {
        return viberIcon;
      }
      case 'VK': {
        return vkIcon;
      }
      case 'Facebook': {
        return facebookIcon;
      }
      default: {
        return vkIcon;
      }
    }
  })();
  return (
    <li className={styles.row}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Icon />
          <span className={styles.percent}>{conversion}</span>
        </div>
        <div className={styles.data}>
          <p className={styles.header}>
            <span className={styles.title}>{title}</span>
            <span className={styles.id}>{id}</span>
          </p>
          <span className={styles.messages}>{messages}</span>
        </div>
        <span className={styles[String(status)]}>
          {status ? 'Запущено' : 'Отклонено'}
        </span>
      </div>
      <hr className={styles.line} />
    </li>
  );
};

export default MobileTableRow;
