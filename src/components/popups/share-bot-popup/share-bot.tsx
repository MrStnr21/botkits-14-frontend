/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import styles from './share-bot.module.scss';
import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';

interface IProps {
  onCancelClick?: () => void;
  onSubmitClick?: () => void;
}
const ShareBotPopup: FC<IProps> = ({ onCancelClick, onSubmitClick }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.shareBotPopup}>
      <Typography tag="h3" fontFamily="secondary">
        Поделитесь доступом к боту
      </Typography>
      <Input
        placeholder="Добавьте e-mail пользователя"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className={styles.shareBotPopup__buttonsContainer}>
        <Button
          onClick={onCancelClick}
          size="large"
          variant="default"
          color="light-grey"
          buttonHtmlType="button"
        >
          Отмена
        </Button>
        <Button
          onClick={onSubmitClick}
          size="large"
          variant="default"
          color="blue"
          buttonHtmlType="submit"
        >
          Поделиться
        </Button>
      </div>
    </div>
  );
};

export default ShareBotPopup;
