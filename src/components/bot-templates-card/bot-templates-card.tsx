import { FC, useState, useRef, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../services/hooks/hooks';
import styles from './bot-templates-card.module.scss';
import CheckboxWithText from '../../ui/CheckboxWithText/CheckboxWithText';
import Avatar from '../../ui/avatar/avatar';
import imageAvatar from '../../images/icon/template/answering machine.svg';
import Menu from '../../ui/menus/menu/menu';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import InputTemplate from '../../ui/inputs/input-template/input-template';
import { updateBotTemplatesAction } from '../../services/actions/bots/templatesBots';
import { TBotTemplate } from '../../services/types/bot';
import ModalPopup from '../popups/modal-popup/modal-popup';
// import Typography from '../../ui/typography/typography';
import EditImagePopup from '../popups/edit-image-popup/edit-image-popup';
import { createUrlBuilder } from '../../utils/utils';
import useForm, { TInputValue } from '../../services/hooks/use-form';

import routesUrl from '../../utils/routesData';
import ButtonIcon from '../../ui/buttons/button-icon/button-icon';
import ConfirmDeletePopup from '../popups/confirm-delete-popup/confirm-delete-popup';
import ButtonBasic from '../../ui/buttons/button-basic/button-basic';

// import { BUTTON_NAME } from '../../utils/constants';

interface IBotTemplatesCard {
  card: TBotTemplate;
  disabled?: boolean;
  deleteCard: (id: string) => void;
}

type TTemplateFormState = {
  nameBot: TInputValue<string>;
  aboutBot: TInputValue<string>;
};

const BotTemplatesCard: FC<IBotTemplatesCard> = ({
  card,
  disabled,
  deleteCard,
}) => {
  const [crm, setCrm] = useState(card.isToPublish!);
  const [menu, toggleMenu] = useState(false);
  const [imageEdit, setImageEdit] = useState<string>('');
  const [iconName, setIconName] = useState<string>('');
  const { values, handleChange, setValues } = useForm<TTemplateFormState>({
    nameBot: { value: card.title || '', isValid: false },
    aboutBot: { value: card.description || '', isValid: false },
  });
  const [isOpen, setOpenPupup] = useState(false);
  const [popup, setPopup] = useState<null | 'edit' | 'delete'>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const importImage = async () => {
    try {
      let imageModule;
      if (card.icon?.includes('http')) {
        imageModule = card.icon;
        return imageModule;
      }
      imageModule = await import(`../../images/icon/template/${card.icon}.svg`);
      setIconName(card.icon);
      return imageModule.default;
    } catch (error) {
      console.log(error);
      return 'null';
    }
  };

  useEffect(() => {
    importImage().then((importedImage) => {
      setImageEdit(importedImage);
    });
  }, [card.icon]);

  useOutsideClickAndEscape(
    menuRef,
    document,
    () => {
      toggleMenu(false);
    },
    buttonRef
  );

  const onCrmChange = () => {
    setCrm(!crm);
  };
  const onClick = () => {
    toggleMenu(!menu);
  };

  // Пока бэк не умеет принимать файлы, реализован попап для ссылки на аватар
  // const onClickEditAvatar = () => {
  //   document.getElementById(`upload-file${id}`)!.click();
  // };

  const handleOptionClick = (e: string) => {
    toggleMenu(false);
    if (e === 'setupBuilder') {
      const path = routesUrl.botBuilder;
      // eslint-disable-next-line no-underscore-dangle
      navigate(createUrlBuilder(path, card._id));
    }
    if (e === 'delete') {
      setOpenPupup(true);
      setPopup('delete');
    }
  };

  const deleteTemplate = () => {
    // eslint-disable-next-line no-underscore-dangle
    deleteCard(card._id);
  };

  const options = [
    { label: 'Настроить воронку', value: 'setupBuilder' },
    { label: 'Удалить', value: 'delete' },
  ];

  const updateTemplate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const upCard = {
      icon: iconName || imageEdit,
      title: values.nameBot.value,
      description: values.aboutBot.value,
      features: card.features,
      isToPublish: crm,
      settings: {},
    };
    // eslint-disable-next-line no-underscore-dangle
    dispatch(updateBotTemplatesAction(upCard, card._id));
  };

  const clearInputs = () => {
    setValues({
      nameBot: { value: '', isValid: false },
      aboutBot: { value: '', isValid: false },
    });
  };

  const handleEdit = () => {
    setOpenPupup(true);
    setPopup('edit');
  };

  const close = () => {
    setOpenPupup(false);
  };

  return (
    <form className={styles.card} onSubmit={updateTemplate}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.avatar}>
            <Avatar
              isBot="no"
              state="offline"
              big="yes"
              botTemplates="yes"
              pic={imageEdit || imageAvatar}
            />
            <div className={styles.editButton}>
              <ButtonIcon
                icon="dropdownEdit"
                onClick={handleEdit}
                btnStyle={styles.edit}
              />
              {/* // Пока бэк не умеет принимать файлы, реализован попап для ссылки на аватар
                <input
                type="file"
                id={`upload-file${id}`}
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
          <div className={styles.more}>
            <button
              ref={buttonRef}
              type="button"
              className={styles.more__Button}
              onClick={onClick}
            >
              {' '}
            </button>
            {menu && (
              <Menu
                ref={menuRef}
                options={options}
                onItemClick={(e) => handleOptionClick(e.value)}
                layoutClassName={styles.dropdown}
              />
            )}
          </div>
        </div>
        <InputTemplate
          onChange={handleChange}
          size="small"
          placeholder="Название бота"
          value={values.nameBot.value}
          name="nameBot"
        />
        <InputTemplate
          onChange={handleChange}
          size="big"
          placeholder="Описание бота..."
          value={values.aboutBot.value}
          name="aboutBot"
        />
        <CheckboxWithText
          label="Опубликовать"
          name="crm"
          value="crm"
          onChange={onCrmChange}
          checked={crm}
          disabled={disabled}
        />
      </div>
      <div className={styles.buttons}>
        <ButtonBasic
          onClick={clearInputs}
          btnStyle={`${styles.button} ${styles.cancel}`}
        >
          Отменить
        </ButtonBasic>
        <ButtonBasic
          type="submit"
          btnStyle={`${styles.button} ${styles.submit}`}
        >
          Сохранить изменения
        </ButtonBasic>
      </div>
      {isOpen && (
        <ModalPopup onClick={() => setOpenPupup(false)}>
          <>
            {popup === 'edit' && (
              <EditImagePopup closeModal={close} editImage={setImageEdit} />
            )}
            {popup === 'delete' && (
              <ConfirmDeletePopup
                onSubmitClick={deleteTemplate}
                onCancelClick={close}
              />
            )}
          </>
        </ModalPopup>
      )}
    </form>
  );
};

export default BotTemplatesCard;
