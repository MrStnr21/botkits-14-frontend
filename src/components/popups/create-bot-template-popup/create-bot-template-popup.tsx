import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import Typography from '../../../ui/typography/typography';
import stylesPopup from './create-bot-template-popup.module.scss';
import InputTemplate from '../../../ui/inputs/input-template/input-template';
import Avatar from '../../../ui/avatar/avatar';
import imageAvatar from '../../../images/icon/side bar/logo.svg';
import EditButton from '../../../ui/buttons/button-edit/button-edit';
import { createUrlBuilder } from '../../../utils/utils';

// import { BUTTON_NAME } from '../../../utils/constants';

import routesUrl from '../../../utils/routesData';
import { getAccessToken } from '../../../auth/authService';
import { addTemplatesBotsApi } from '../../../api/bots';
import ModalPopup from '../modal-popup/modal-popup';
import EditImagePopup from '../edit-image-popup/edit-image-popup';

interface IPopupCreateBotTemplates {
  closeModal: () => void;
}

const CreateBotTemplatesPopup: FC<IPopupCreateBotTemplates> = ({
  closeModal,
}) => {
  const [imageEdit, setImageEdit] = useState<string>('');
  const [nameBot, setNameBot] = useState<string>('');
  const [aboutBot, setAboutBot] = useState<string>('');
  const [isOpen, setOpenPupup] = useState(false);

  const history = useNavigate();

  const token = getAccessToken();

  // Пока бэк не умеет принимать файлы, реализован попап для ссылки на аватар
  // const onClickEditAvatar = () => {
  //   document.getElementById('upload-file')!.click();
  // };

  const clearInputs = () => {
    setNameBot('');
    setAboutBot('');
    closeModal();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataBotTemplates = {
      title: nameBot,
      description: aboutBot,
      icon: imageEdit,
    };
    const path = routesUrl.botBuilder;

    try {
      const template = await addTemplatesBotsApi(dataBotTemplates, token);
      // eslint-disable-next-line no-underscore-dangle
      const id = template._id;
      history(createUrlBuilder(path, id));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    setNameBot('');
    setAboutBot('');
  };

  const openPopup = () => {
    setOpenPupup(!isOpen);
  };

  return (
    <div className={stylesPopup.popup}>
      <form onSubmit={handleSubmit}>
        <div className={stylesPopup.popup__content}>
          <Typography tag="h3" className={stylesPopup.popup__heading}>
            Добавить Шаблон
          </Typography>
          <div className={stylesPopup.avatar}>
            <Avatar
              isBot="no"
              state="offline"
              big="yes"
              botTemplates="yes"
              pic={imageEdit || imageAvatar}
            />
            <div className={stylesPopup.editButton}>
              <EditButton onClick={openPopup} />
              {/* // Пока бэк не умеет принимать файлы, реализован попап для ссылки на аватар
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
              </label> */}
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
      {isOpen && (
        <ModalPopup onClick={() => setOpenPupup(false)}>
          <EditImagePopup closeModal={openPopup} editImage={setImageEdit} />
        </ModalPopup>
      )}
    </div>
  );
};

export default CreateBotTemplatesPopup;
