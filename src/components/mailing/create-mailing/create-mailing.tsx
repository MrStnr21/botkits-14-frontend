/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, useState } from 'react';
import Input from '../../../ui/inputs/input/input';
import styles from './create-mailing.module.scss';
import DropDownList from '../../chat/DropDownList/DropDownList';
import TextField from '../../../ui/text-field/text-field';
import Typography from '../../../ui/typography/typography';
import { Button } from '../../../ui/buttons/button-add-bot/button-add-bot.stories';
import ButtonAddContent from '../../../ui/buttons/button-add-content/button-add-content';
import Checkbox from '../../../ui/checkboxes/checkbox';
import CustomCheckbox from '../../../ui/checkboxes/custom-checkbox/custom-checkbox';
import CheckIcon from '../../icons/Check/CheckIcon';

const CreateMailing: FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecChecked, setIsSecChecked] = useState(false);

  const handleFirstClick = () => {
    setIsSecChecked(false);
    setIsFirstChecked(!isFirstChecked);
  };

  const handleSecClick = () => {
    setIsFirstChecked(false);
    setIsSecChecked(!isSecChecked);
  };

  return (
    <div className={styles.create}>
      <div className={styles.create__wrapper}>
        <form className={styles.create__form}>
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>
              Шаг 1 {'>'} Создание рассылки
            </legend>
            <div className={styles.create__inputWrapper}>
              <Input
                placeholder="Название рассылки"
                onChange={(e) => setNameValue(e.target.value)}
                value={nameValue}
              />
            </div>
            <DropDownList caption="Список рассылки" />
          </fieldset>
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>Текст сообщения</legend>
            <TextField />
            <DropDownList caption="Telegram, VK" />
          </fieldset>
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>Добавить</legend>
            <ButtonAddContent />
          </fieldset>
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>
              Активировать воронку
            </legend>
            <div className={styles.create__checkboxes}>
              <div
                className={styles.create__checkbox}
                onClick={handleFirstClick}
              >
                <CustomCheckbox
                  text="Активировать"
                  isChecked={isFirstChecked}
                />
                {isFirstChecked && <CheckIcon />}
              </div>
              <div className={styles.create__checkbox} onClick={handleSecClick}>
                <CustomCheckbox
                  text="Не активировать"
                  isChecked={isSecChecked}
                />
                {isSecChecked && <CheckIcon />}
              </div>
            </div>
          </fieldset>
        </form>
        <div className={styles.create__buttons}>
          <button type="button" className={styles.create__commonButton}>
            <Typography tag="p" className={styles.create__buttonText}>
              Выйти
            </Typography>
          </button>
          <button type="button" className={styles.create__greenButton}>
            <Typography tag="p" className={styles.create__buttonText}>
              Далее
            </Typography>
          </button>
        </div>
      </div>
      <div>Тут будет асайд</div>
    </div>
  );
};

export default CreateMailing;
