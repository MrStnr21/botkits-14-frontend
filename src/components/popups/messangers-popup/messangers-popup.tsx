import { FC, useState } from 'react';
import Typography from '../../../ui/typography/typography';
import ModalPopup from '../modal-popup/modal-popup';
import styles from './messangers-popup.module.scss';
import AttachedFileIcon from '../../icons/AttachedFile/AttachedFileIcon';

interface IMessengersPopup {
  onClose: () => void;
}

const MessengersPopup: FC<IMessengersPopup> = () => {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState('');

  const getBlockLink = (name: string, link: string) => {
    return (
      <div className={styles.blockLink}>
        <Typography tag="p">{name}</Typography>
        <div className={styles.mainLink}>
          <a href={link}>{link}</a>
          <div
            className={styles.iconWrap}
            onClick={() => {
              navigator.clipboard.writeText(link);
              setCopied(name);
            }}
          >
            <AttachedFileIcon color={copied === name ? '#A6B3C9' : '#243CBB'} />
          </div>
        </div>
      </div>
    );
  };

  return open ? (
    <ModalPopup onClick={() => setOpen(false)}>
      <div className={styles.main}>
        <Typography tag="h3" fontFamily="secondary">
          Ссылки на мессенджеры
        </Typography>
        <div className={styles.links}>
          {getBlockLink('Бот в Telegram', 'https://web.telegram.org/a/')}
          {getBlockLink('Бот в Facebook', 'https://www.facebook.com')}
        </div>
      </div>
    </ModalPopup>
  ) : null;
};

export default MessengersPopup;
