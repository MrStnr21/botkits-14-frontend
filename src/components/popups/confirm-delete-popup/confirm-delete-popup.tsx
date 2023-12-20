import { FC } from 'react';
import styles from './confirm-delete-popup.module.scss';
import Button from '../../../ui/buttons/button/button';
import Typography from '../../../ui/typography/typography';

interface IProps {
  onCancelClick?: () => void;
  onSubmitClick?: () => void;
}
const ConfirmDeletePopup: FC<IProps> = ({ onCancelClick, onSubmitClick }) => {
  return (
    <div className={styles.popup}>
      <Typography tag="h3" fontFamily="secondary">
        Подтвердите удаление
      </Typography>
      <div className={styles.popup__buttonsContainer}>
        <Button
          onClick={onCancelClick}
          size="medium"
          variant="default"
          color="grey"
          buttonHtmlType="button"
        >
          Отменить
        </Button>
        <Button
          onClick={onSubmitClick}
          size="medium"
          variant="default"
          color="blue"
          buttonHtmlType="submit"
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
