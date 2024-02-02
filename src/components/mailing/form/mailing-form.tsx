/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { Descendant } from 'slate';
import styles from './mailing-form.module.scss';
import CheckIcon from '../../icons/Check/CheckIcon';
import ButtonAddContent from '../../../ui/buttons/button-add-content/button-add-content';
import MailingPopup from '../../popups/mailing-popup/mailing-popup';
import TextField from '../../../ui/text-field/text-field';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';
import { Option } from '../../../utils/types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {
  MFacitveFunnel,
  MFcrumbs,
  MFmailingList,
  MFmessengerList,
} from '../../../utils/mockMailingData';
import Select from '../../../ui/select/select';
import { TFormData } from '../../../services/types/mailing';

interface IProps {
  formData: TFormData;
  setFormData: any;
  handleBack: () => void;
  handleClickButton: () => void;
}

const MailingForm: FC<IProps> = ({
  formData,
  setFormData,
  handleBack,
  handleClickButton,
}) => {
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecChecked, setIsSecChecked] = useState(false);
  const [list, setList] = useState<Option | null>(null);
  const [messenger, setMessenger] = useState<Option | null>(null); // переработать на массив

  const handleFirstClick = () => {
    setIsSecChecked(false);
    setFormData({
      ...formData,
      isActiveBotBuilder: !isFirstChecked,
    });
    setIsFirstChecked(!isFirstChecked);
  };

  const handleSecClick = () => {
    setIsFirstChecked(false);
    setFormData({
      ...formData,
      isActiveBotBuilder: false,
    });
    setIsSecChecked(!isSecChecked);
  };

  const handleTextChange = (newText: Descendant[]) => {
    setFormData({
      ...formData,
      message: newText,
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.form__breadcrumbs}>
          <Breadcrumbs crumbs={MFcrumbs} />
        </div>
        <fieldset className={styles.form__formFieldset}>
          <div className={styles.form__inputWrapper}>
            <Input
              placeholder="Название рассылки"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              minLength={0}
            />
          </div>
          <div className={styles.form__menuVariableWrapper}>
            <Select
              options={MFmailingList}
              currentOption={list}
              handleSelect={(option: Option) => setList(option)}
              placeholder="Список рассылки"
            />
          </div>
        </fieldset>
        <fieldset className={styles.form__formFieldset}>
          <legend className={styles.form__legend}>Текст сообщения</legend>
          <div className={styles.form__textField}>
            <TextField setText={handleTextChange} text={formData.message} />
          </div>
          <div className={styles.form__menuVariableWrapper}>
            <Select
              options={MFmessengerList}
              currentOption={messenger}
              handleSelect={(option: Option) => setMessenger(option)}
              placeholder="Список мессенджеров"
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
              <MailingPopup caption="Активировать" elements={MFacitveFunnel} />
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
            formData.name && formData.message
              ? styles.container__greenActiveButton
              : styles.container__greenButton
          }
          onClick={handleClickButton}
        >
          <Typography
            tag="p"
            className={
              formData.name && formData.message
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
