import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import Typography from '../../../ui/typography/typography';
import stylesPopup from './create-bot-template-popup.module.scss';
import InputTemplate from '../../../ui/inputs/input-template/input-template';
import CheckboxWithText from '../../../ui/CheckboxWithText/CheckboxWithText';
import Avatar from '../../../ui/avatar/avatar';
import imageAvatar from '../../../images/icon/side bar/logo.svg';
import EditButton from '../../../ui/buttons/button-edit/button-edit';
import { addTemplatesBotsApi } from '../../../api/bots';

import { BUTTON_NAME } from '../../../utils/constants';

import { useAppDispatch } from '../../../services/hooks/hooks';
import routesUrl from '../../../utils/routesData';
import { getAccessToken } from '../../../auth/authService';
// import useForm from '../../../services/hooks/use-form';

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

  // const { values, handleChange, setValues } = useForm({
  //   nameBot: { value: '', valueValid: false },
  //   aboutBot: { value: '', valueValid: false },
  // });

  const history = useNavigate();

  const dispatch = useAppDispatch();

  const token = getAccessToken();

  const onClickEditAvatar = () => {
    document.getElementById('upload-file')!.click();
  };

  const onCrmChange = () => {
    setCrm(!crm);
  };

  const clearInputs = () => {
    setNameBot('');
    setAboutBot('');
    // setValues({
    //   nameBot: { value: '', valueValid: false },
    //   aboutBot: { value: '', valueValid: false },
    // });
    closeModal();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataBotTemplates = {
      type: 'template',
      title: nameBot,
      description: aboutBot,
      icon: imageEdit!,
      features: [{}],
      settings: {},
      messengers: [{}],
      isToPublish: crm,
    };

    //   _id: string;
    // type: 'template';
    // title: string;
    // description: string;
    // icon: string;
    // messengers: [];
    // // profile: null;
    // profile: string;
    // features: Array<Object>;
    // commands: Array<string>;
    // content: Array<Object>;
    // isToPublish: boolean;
    // success: boolean;

    try {
      dispatch(addTemplatesBotsApi(dataBotTemplates, token));
      history(`/${routesUrl.botBuilder}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    setNameBot('');
    setAboutBot('');

    // setValues({
    //   nameBot: { value: '', valueValid: false },
    //   aboutBot: { value: '', valueValid: false },
    // });
  };

  return (
    <div className={stylesPopup.popup}>
      <form onSubmit={handleSubmit}>
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
            // onChange={handleChange}
            size="small"
            placeholder="Название бота"
            value={nameBot}
          />
          <InputTemplate
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setAboutBot(e.target.value)
            }
            // onChange={handleChange}
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
          <button type="submit" className={stylesPopup.popup__confirmBtn}>
            <Typography tag="p" className={stylesPopup.popup__confirmText}>
              Cоздать
            </Typography>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBotTemplatesPopup;
