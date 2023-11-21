import { FC, useState } from 'react';
import Typography from '../../../ui/typography/typography';
import ModalPopup from '../modal-popup/modal-popup';
import styles from './messangers-popup.module.scss';
import AttachedFileIcon from '../../icons/AttachedFile/AttachedFileIcon';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { CLOSE_MES_POPUP } from '../../../services/actions/popups/messengers-popup';

const MessengersPopup: FC = () => {
  const state = useAppSelector((s) => s.toggleMessengersPopup.opened);

  // const [open, setOpen] = useState(state);
  const [onCursor, setOnCursor] = useState('');

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
            }}
          >
            <div
              onMouseEnter={() => setOnCursor(name)}
              onMouseLeave={() => setOnCursor('')}
            >
              <AttachedFileIcon
                color={onCursor === name ? '#A6B3C9' : '#243CBB'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const dispatch = useAppDispatch();

  return state ? (
    <ModalPopup onClick={() => dispatch({ type: CLOSE_MES_POPUP })}>
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
