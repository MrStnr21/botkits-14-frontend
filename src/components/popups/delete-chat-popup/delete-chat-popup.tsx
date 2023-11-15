import { FC } from 'react';
import Typography from '../../../ui/typography/typography';
import styles from './delete-chat-popup.module.scss';

interface IDelete {
  closeModal: () => void;
}

const DeleteChatPopup: FC<IDelete> = ({ closeModal }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <Typography tag="h3" className={styles.popup__heading}>
          Вы уверены, что хотите удалить этот чат?
        </Typography>
        <Typography tag="p" className={styles.popup__text}>
          Все данные в этом чате будут безвозвратно удалены.
        </Typography>
      </div>
      <div className={styles.popup__buttons}>
        <button
          type="button"
          className={styles.popup__rejectBtn}
          onClick={closeModal}
        >
          <Typography tag="p" className={styles.popup__rejectText}>
            Отмена
          </Typography>
        </button>
        <button type="button" className={styles.popup__confirmBtn}>
          <Typography tag="p" className={styles.popup__confirmText}>
            Удалить
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default DeleteChatPopup;
