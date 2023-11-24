/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import styles from './mailing-form.module.scss';
import CheckIcon from '../../icons/Check/CheckIcon';
import ButtonAddContent from '../../../ui/buttons/button-add-content/button-add-content';
import MailingPopup from '../../popups/mailing-popup/mailing-popup';
import TextField from '../../../ui/text-field/text-field';
import Input from '../../../ui/inputs/input/input';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';
import Typography from '../../../ui/typography/typography';

const mailingList = ['Все пользователи', 'Список 1', 'Список 2', 'Список 3'];
const messengerList = ['Telegram, VK', 'Одноклассники', 'WhatsApp', 'Facebook'];
const acitveFunnel = ['Воронка 1', 'Воронка 2', 'Воронка 3'];

interface IProps {
  nameValue: string;
  textValue: string;
  setNameValue: any;
  setTextValue: any;
  handleBack: () => void;
  handleClickButton: () => void;
}

const MailingForm: FC<IProps> = ({
  nameValue,
  textValue,
  setNameValue,
  setTextValue,
  handleBack,
  handleClickButton,
}) => {
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecChecked, setIsSecChecked] = useState(false);
  const [list, setList] = useState('');
  const [messengers, setMessengers] = useState(''); // переработать на массив

  const handleFirstClick = () => {
    setIsSecChecked(false);
    setIsFirstChecked(!isFirstChecked);
  };

  const handleSecClick = () => {
    setIsFirstChecked(false);
    setIsSecChecked(!isSecChecked);
  };

  const handleTextChange = (newText: string) => {
    setTextValue(newText);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.form__formFieldset}>
          <legend className={styles.form__legend}>
            Шаг 1 {'>'} Создание рассылки {/* сделать breadcrumbs */}
          </legend>
          <div className={styles.form__inputWrapper}>
            <Input
              placeholder="Название рассылки"
              onChange={(e) => setNameValue(e.target.value)}
              value={nameValue}
              minLength={0}
            />
          </div>
          <div className={styles.form__menuVariableWrapper}>
            <MenuVariable
              buttons={mailingList}
              nameMenu="Список рассылки"
              onClick={(selected: string) => setList(selected)}
            />
          </div>
        </fieldset>
        <fieldset className={styles.form__formFieldset}>
          <legend className={styles.form__legend}>Текст сообщения</legend>
          <TextField setText={handleTextChange} text={textValue} />
          <div className={styles.form__menuVariableWrapper}>
            <MenuVariable
              buttons={messengerList}
              nameMenu="Telegram, VK"
              onClick={(selected: string) => setMessengers(selected)}
            />
          </div>
        </fieldset>
        <fieldset className={styles.form__formFieldset}>
          <legend className={styles.form__legend}>Добавить</legend>
          <ButtonAddContent />
        </fieldset>
        <fieldset className={styles.form__formFieldset}>
          <legend className={styles.form__legend}>Активировать воронку</legend>
          <div className={styles.form__checkboxes}>
            <div
              className={styles.form__popupWrapper}
              onClick={handleFirstClick}
            >
              <MailingPopup caption="Активировать" elements={acitveFunnel} />
              {isFirstChecked && <CheckIcon />}
            </div>
            <div className={styles.form__popupWrapper} onClick={handleSecClick}>
              <MailingPopup caption="Не активировать" elements={[]} />
              {isSecChecked && <CheckIcon />}
            </div>
          </div>
        </fieldset>
      </form>
      <div className={styles.container__buttons}>
        <button
          type="button"
          className={styles.container__commonButton}
          onClick={handleBack}
        >
          <Typography tag="p" className={styles.container__buttonText}>
            Выйти
          </Typography>
        </button>
        <button
          type="button"
          className={
            nameValue && textValue
              ? styles.container__greenActiveButton
              : styles.container__greenButton
          }
          onClick={handleClickButton}
        >
          <Typography
            tag="p"
            className={
              nameValue && textValue
                ? styles.container__blackText
                : styles.container__buttonText
            }
          >
            Далее
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default MailingForm;
