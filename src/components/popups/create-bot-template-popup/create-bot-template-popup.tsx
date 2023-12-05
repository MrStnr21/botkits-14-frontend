import { FC, useState, ChangeEvent } from 'react';
import Typography from '../../../ui/typography/typography';
import stylesPopup from './create-bot-template-popup.module.scss';
import InputTemplate from '../../../ui/inputs/input-template/input-template';
import CheckboxWithText from '../../../ui/CheckboxWithText/CheckboxWithText';
import Avatar from '../../../ui/avatar/avatar';
import imageAvatar from '../../../images/icon/side bar/logo.svg';
import EditButton from '../../../ui/buttons/button-edit/button-edit';

import { BUTTON_NAME } from '../../../utils/constants';

interface IPopupCreateBotTemplates {
  closeModal: () => void;
}

const CreateBotTemplatesPopup: FC<IPopupCreateBotTemplates> = ({
  closeModal,
}) => {
  const [imageEdit, setImageEdit] = useState<string>();
  const [crm, setCrm] = useState(true);
  const [nameBot, setNameBot] = useState<string>('');
  const [aboutBot, setAboutBot] = useState<string>('');

  const onClickEditAvatar = () => {
    document.getElementById('upload-file')!.click();
  };

  const onCrmChange = () => {
    setCrm(!crm);
  };

  const clearInputs = () => {
    setNameBot('');
    setAboutBot('');
    closeModal();
  };

  return (
    <div className={stylesPopup.popup}>
      <div className={stylesPopup.popup__content}>
        <Typography tag="h3" className={stylesPopup.popup__heading}>
          Добавить Шаблон
        </Typography>
        {/* <Typography tag="p" className={styles.popup__text}>
          Все данные в этом чате будут безвозвратно удалены.
        </Typography> */}
        <div className={stylesPopup.avatar}>
          <Avatar
            isBot="no"
            state="offline"
            big="yes"
            botTemplates="yes"
            pic={imageEdit || imageAvatar}
          />
          <div className={stylesPopup.editButton}>
            <input
              type="file"
              id="upload-file"
              hidden
              accept="image/*"
              onChange={({ target: { files } }) => {
                if (files !== null && files[0]) {
                  setImageEdit(URL.createObjectURL(files[0]));
                }
              }}
            />
            <label htmlFor={BUTTON_NAME.IMAGE}>
              <EditButton onClick={onClickEditAvatar} />
            </label>
          </div>
        </div>
        <InputTemplate
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setNameBot(e.target.value)
          }
          size="small"
          placeholder="Название бота"
          value={nameBot}
        />
        <InputTemplate
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setAboutBot(e.target.value)
          }
          size="big"
          placeholder="Описание бота..."
          value={aboutBot}
        />
        <CheckboxWithText
          label="Опубликовать"
          name="crm"
          value="crm"
          onChange={onCrmChange}
          checked={crm}
        />
      </div>
      <div className={stylesPopup.popup__buttons}>
        <button
          type="button"
          className={stylesPopup.popup__rejectBtn}
          onClick={clearInputs}
        >
          <Typography tag="p" className={stylesPopup.popup__rejectText}>
            Отмена
          </Typography>
        </button>
        <button type="button" className={stylesPopup.popup__confirmBtn}>
          <Typography tag="p" className={stylesPopup.popup__confirmText}>
            Cоздать
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default CreateBotTemplatesPopup;
