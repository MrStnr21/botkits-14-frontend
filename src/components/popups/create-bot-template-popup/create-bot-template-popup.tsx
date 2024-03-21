import { FC, useState, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import Typography from '../../../ui/typography/typography';
import styles from './create-bot-template-popup.module.scss';
import InputTemplate from '../../../ui/inputs/input-template/input-template';
import Avatar from '../../../ui/avatar/avatar';
import imageAvatar from '../../../images/icon/side bar/logo.svg';
import { createUrlBuilder } from '../../../utils/utils';

// import { BUTTON_NAME } from '../../../utils/constants';

import routesUrl from '../../../utils/routesData';
import ModalPopup from '../modal-popup/modal-popup';
import EditImagePopup from '../edit-image-popup/edit-image-popup';
import useForm, { TInputValue } from '../../../services/hooks/use-form';
import { TBotTemplateReq } from '../../../services/types/bot';
import { addBotTemplateAction } from '../../../services/actions/bots/templatesBots';
import { useAppDispatch } from '../../../services/hooks/hooks';
import ButtonIcon from '../../../ui/buttons/button-icon/button-icon';
// import { TTemplateBotRes } from '../../../services/types/bot';

interface IPopupCreateBotTemplates {
  closeModal: () => void;
}

type TTemplateFormState = {
  nameBot: TInputValue<string>;
  aboutBot: TInputValue<string>;
};

const CreateBotTemplatesPopup: FC<IPopupCreateBotTemplates> = ({
  closeModal,
}) => {
  const [imageEdit, setImageEdit] = useState<string>('');
  const [isOpen, setOpenPupup] = useState(false);
  const { values, handleChange, setValues, isFormValid } =
    useForm<TTemplateFormState>({
      nameBot: { value: '', isValid: false },
      aboutBot: { value: '', isValid: false },
    });

  const history = useNavigate();
  const dispatch = useAppDispatch();

  // Пока бэк не умеет принимать файлы, реализован попап для ссылки на аватар
  // const onClickEditAvatar = () => {
  //   document.getElementById('upload-file')!.click();
  // };

  const clearInputs = () => {
    setValues({
      nameBot: { value: '', isValid: false },
      aboutBot: { value: '', isValid: false },
    });
    closeModal();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const imageModule = await import(
        `../../../images/icon/side bar/logo.svg`
      );
      const dataBotTemplates: TBotTemplateReq = {
        title: values.nameBot.value as string,
        description: values.aboutBot.value as string,
        icon: imageEdit || imageModule.default,
        isToPublish: false,
      };
      dispatch(
        addBotTemplateAction(dataBotTemplates, (templateId: string) =>
          history(createUrlBuilder(routesUrl.botBuilder, templateId))
        )
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    setValues({
      nameBot: { value: '', isValid: false },
      aboutBot: { value: '', isValid: false },
    });
  };

  const openPopup = () => {
    setOpenPupup(!isOpen);
  };

  return (
    <div className={styles.popup}>
      <form onSubmit={handleSubmit}>
        <div className={styles.popup__content}>
          <Typography tag="h3" className={styles.popup__heading}>
            Добавить Шаблон
          </Typography>
          <div className={styles.avatar}>
            <Avatar
              isBot="no"
              state="offline"
              big="yes"
              botTemplates="yes"
              pic={imageEdit || imageAvatar}
            />
            <ButtonIcon
              icon="dropdownEdit"
              onClick={openPopup}
              btnStyle={styles.edit}
            />
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
          <InputTemplate
            name="nameBot"
            onChange={handleChange}
            size="small"
            placeholder="Название бота"
            value={values.nameBot.value}
            required
          />
          <InputTemplate
            name="aboutBot"
            onChange={handleChange}
            size="big"
            placeholder="Описание бота..."
            value={values.aboutBot.value}
            required
          />
        </div>
        <div className={styles.popup__buttons}>
          <button
            type="button"
            className={styles.popup__rejectBtn}
            onClick={clearInputs}
          >
            <Typography tag="p" className={styles.popup__rejectText}>
              Отмена
            </Typography>
          </button>
          <button
            type="submit"
            className={styles.popup__confirmBtn}
            disabled={isFormValid}
          >
            <Typography tag="p" className={styles.popup__confirmText}>
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
