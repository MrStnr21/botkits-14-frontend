/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import styles from './share-bot.module.scss';
import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';

interface IProps {
  onCancelClick: () => void;
  onSubmitClick: (inputValue: string) => void;
}
const ShareBotPopup: FC<IProps> = ({ onCancelClick, onSubmitClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  // const [error, setError] = useState<{ error: boolean; textError: string }>({
  //   error: false,
  //   textError: '',
  // });

  const handleAddClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(inputValue)) {
      setIsInvalid(false);
      onSubmitClick(inputValue);
    }
    setIsInvalid(true);
    setInputValue('');
  };

  return (
    <div className={styles.shareBotPopup}>
      <Typography tag="h3" fontFamily="secondary">
        Поделитесь доступом к боту
      </Typography>
      <div className={styles.shareBotPopup__inputContainer}>
        <Input
          placeholder="Добавьте e-mail пользователя"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          isInvalid={isInvalid}
        />
        {/* {error && (
          <Typography tag="p" className={styles.shareBotPopup__incorrectText}>
            {error.textError}
          </Typography>
        )} */}
      </div>
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
          onClick={handleAddClick}
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
