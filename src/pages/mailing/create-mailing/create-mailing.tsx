/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../../../ui/inputs/input/input';
import styles from './create-mailing.module.scss';
import TextField from '../../../ui/text-field/text-field';
import Typography from '../../../ui/typography/typography';
import ButtonAddContent from '../../../ui/buttons/button-add-content/button-add-content';
import CheckIcon from '../../../components/icons/Check/CheckIcon';
import AsideMailing from '../../../components/mailing/aside/aside';
import ChevronIcon from '../../../components/icons/Chevron/ChevronIcon';
import BotFace from '../../../components/icons/Bot/BotIcon';
import MailingPopup from '../../../components/popups/mailing-popup/mailing-popup';
import DownloadFile from '../../../ui/inputs/add-file/add-file';
import { SIZE_INPUT } from '../../../utils/constants';

const mailingList = ['Все пользователи', 'Список 1', 'Список 2', 'Список 3'];
const messengerList = ['Telegram, VK', 'Одноклассники', 'WhatsApp', 'Facebook'];
const acitveFunnel = ['Воронка 1', 'Воронка 2', 'Воронка 3'];

const CreateMailing: FC = () => {
  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const navigate = useNavigate();

  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecChecked, setIsSecChecked] = useState(false);
  const [isAsideVisible, setAsideVisible] = useState(true);
  // const [isInputvisible, setInputVisible] = useState(true);

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

  const handleChevronClick = () => {
    setAsideVisible(!isAsideVisible);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.create}>
      <div>
        <button
          type="button"
          className={styles.create__sideButton}
          onClick={handleChevronClick}
        >
          <ChevronIcon position={isAsideVisible ? 'right' : 'left'} />
        </button>
        {!isAsideVisible && (
          <div className={styles.create__blue}>
            <BotFace width={64} height={64} />
          </div>
        )}
      </div>
      <div className={styles.create__wrapper}>
        <form className={styles.create__form}>
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>
              Шаг 1 {'>'} Создание рассылки {/* сделать breadcrumbs */}
            </legend>
            <div className={styles.create__inputWrapper}>
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
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>Текст сообщения</legend>
            <TextField onChangeText={handleTextChange} textValue={textValue} />
            <MailingPopup
              caption="Telegram, VK"
              elements={messengerList}
              chevron
            />
          </fieldset>
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>Добавить</legend>
            <ButtonAddContent />
            <MailingPopup
              caption="Telegram, VK"
              elements={messengerList}
              chevron
            />
          </fieldset>
          {/* {isInputvisible && (
            <div className={styles.create__downloadWrapper}>
              <DownloadFile size={SIZE_INPUT.L} />
            </div>
          )} */}
          <fieldset className={styles.create__formFieldset}>
            <legend className={styles.create__legend}>
              Активировать воронку
            </legend>
            <div className={styles.create__checkboxes}>
              <div
                className={styles.create__popupWrapper}
                onClick={handleFirstClick}
              >
                <MailingPopup caption="Активировать" elements={acitveFunnel} />
                {isFirstChecked && <CheckIcon />}
              </div>
              <div
                className={styles.create__popupWrapper}
                onClick={handleSecClick}
              >
                <MailingPopup caption="Не активировать" elements={[]} />
                {isSecChecked && <CheckIcon />}
              </div>
            </div>
          </fieldset>
        </form>
        <div className={styles.create__buttons}>
          <button
            type="button"
            className={styles.create__commonButton}
            onClick={handleBack}
          >
            <Typography tag="p" className={styles.create__buttonText}>
              Выйти
            </Typography>
          </button>
          <button
            type="button"
            className={
              nameValue && textValue
                ? styles.create__greenActiveButton
                : styles.create__greenButton
            }
          >
            <Typography
              tag="p"
              className={
                nameValue && textValue
                  ? styles.create__blackText
                  : styles.create__buttonText
              }
            >
              Далее
            </Typography>
          </button>
        </div>
      </div>
      {isAsideVisible && <AsideMailing title={nameValue} text={textValue} />}
    </div>
  );
};

export default CreateMailing;
