import { FC } from 'react';
import styles from './dialog-mobile-popup.module.scss';
import Typography from '../../../../ui/typography/typography';

export interface IProps {
  handleClick?: () => void;
  openModal?: () => void;
}

const DialogMobilePopup: FC<IProps> = ({ handleClick, openModal }) => {
  return (
    <div className={styles.popup}>
      <button
        type="button"
        className={styles.popup__button}
        onClick={handleClick}
      >
        <Typography tag="p" className={styles.popup__text}>
          Поиск
        </Typography>
      </button>
      <button
        type="button"
        className={styles.popup__button}
        onClick={openModal}
      >
        <Typography tag="p" className={styles.popup__text}>
          Удалить
        </Typography>
      </button>
    </div>
  );
};

export default DialogMobilePopup;
