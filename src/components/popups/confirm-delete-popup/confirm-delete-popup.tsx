/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import styles from './confirm-delete-popup.module.scss';
import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';

interface IProps {
  onCancelClick?: () => void;
  onSubmitClick?: () => void;
}
const ConfirmDeletePopup: FC<IProps> = ({ onCancelClick, onSubmitClick }) => {
  return (
    <div className={styles.shareBotPopup}>
      <Typography tag="h3" fontFamily="secondary">
        Подтвердите удаление
      </Typography>
      <div className={styles.shareBotPopup__buttonsContainer}>
        <Button
          onClick={onCancelClick}
          size="medium"
          variant="default"
          color="light-grey"
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
