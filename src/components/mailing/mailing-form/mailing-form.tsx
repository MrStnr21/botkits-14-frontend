import { FC, useState } from 'react';
import styles from './mailing-form.module.scss';
import CheckIcon from '../../icons/Check/CheckIcon';
import ButtonAddContent from '../../../ui/buttons/button-add-content/button-add-content';
import MailingPopup from '../../popups/mailing-popup/mailing-popup';
import TextField from '../../../ui/text-field/text-field';
import Input from '../../../ui/inputs/input/input';

const mailingList = ['Все пользователи', 'Список 1', 'Список 2', 'Список 3'];
const messengerList = ['Telegram, VK', 'Одноклассники', 'WhatsApp', 'Facebook'];
const acitveFunnel = ['Воронка 1', 'Воронка 2', 'Воронка 3'];

interface IProps {
  nameValue: string;
  textValue: string;
  setNameValue: any;
  setTextValue: any;
}

const MailingForm: FC<IProps> = ({
  nameValue,
  textValue,
  setNameValue,
  setTextValue,
}) => {
  // const [nameValue, setNameValue] = useState('');
  // const [textValue, setTextValue] = useState('');
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

  const handleTextChange = (newText: string) => {
    setTextValue(newText);
  };
  return (
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
          />
        </div>
        <MailingPopup
          caption="Список рассылок"
          elements={mailingList}
          chevron
        />
      </fieldset>
      <fieldset className={styles.form__formFieldset}>
        <legend className={styles.form__legend}>Текст сообщения</legend>
        <TextField onChangeText={handleTextChange} textValue={textValue} />
        <MailingPopup caption="Telegram, VK" elements={messengerList} chevron />
      </fieldset>
      <fieldset className={styles.form__formFieldset}>
        <legend className={styles.form__legend}>Добавить</legend>
        <ButtonAddContent />
      </fieldset>
      <fieldset className={styles.form__formFieldset}>
        <legend className={styles.form__legend}>Активировать воронку</legend>
        <div className={styles.form__checkboxes}>
          <div className={styles.form__popupWrapper} onClick={handleFirstClick}>
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
  );
};

export default MailingForm;
