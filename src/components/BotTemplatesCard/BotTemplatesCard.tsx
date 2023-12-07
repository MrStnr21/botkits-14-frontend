import { FC, useState, useRef, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import stylesCard from './BotTemplatesCard.module.scss';
import CheckboxWithText from '../../ui/CheckboxWithText/CheckboxWithText';
import Avatar from '../../ui/avatar/avatar';
import imageAvatar from '../../images/icon/template/answering machine.svg';
import EditButton from '../../ui/buttons/button-edit/button-edit';
import Menu from '../../ui/menus/menu/menu';
import useOutsideClickAndEscape from '../../utils/hooks/useOutsideClickAndEscape';
import ButtonBotTemplate from '../../ui/buttons/button-bot-template/button-bot-template';
import InputTemplate from '../../ui/inputs/input-template/input-template';

import routesUrl from '../../utils/routesData';

import { BUTTON_NAME } from '../../utils/constants';

interface IBotTemplatesCard {
  id: string;
  image?: string;
  title?: string;
  description?: string;
  isToPublish: boolean;
  disabled?: boolean;
  deleteCard: (id: string) => void;
}

const BotTemplatesCard: FC<IBotTemplatesCard> = ({
  image,
  id,
  title,
  description,
  isToPublish,
  disabled,
  deleteCard,
}) => {
  const [crm, setCrm] = useState(isToPublish);
  const [menu, toggleMenu] = useState(false);
  const [imageEdit, setImageEdit] = useState<string>();
  const [nameBot, setNameBot] = useState<string>(title || '');
  const [aboutBot, setAboutBot] = useState<string>(description || '');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const importImage = async () => {
    try {
      const imageModule = await import(
        `../../images/icon/template/${image}.svg`
      );
      return imageModule.default;
    } catch (error) {
      return 'null';
    }
  };

  useEffect(() => {
    importImage().then((importedImage) => {
      setImageEdit(importedImage);
    });
  }, [image]);

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

  const onClickEditAvatar = () => {
    document.getElementById(`upload-file${id}`)!.click();
  };

  const handleOptionClick = (e: string) => {
    toggleMenu(false);
    if (e === 'setupBuilder') {
      const path = routesUrl.botBuilder;
      navigate(`/${path}?id=${id}&type=template`);
    }
    if (e === 'delete') {
      deleteCard(id);
    }
  };

  const options = [
    { label: 'Настроить воронку', value: 'setupBuilder' },
    { label: 'Удалить', value: 'delete' },
  ];

  const clearInputs = () => {
    setNameBot('');
    setAboutBot('');
  };

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.container}>
        <div className={stylesCard.wrapper}>
          <div className={stylesCard.avatar}>
            <Avatar
              isBot="no"
              state="offline"
              big="yes"
              botTemplates="yes"
              pic={imageEdit || imageAvatar}
            />
            <div className={stylesCard.editButton}>
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
              </label>
            </div>
          </div>
          <div className={stylesCard.more}>
            <button
              ref={buttonRef}
              type="button"
              className={stylesCard.more__Button}
              onClick={onClick}
            >
              {' '}
            </button>
            {menu && (
              <Menu
                ref={menuRef}
                options={options}
                onItemClick={(e) => handleOptionClick(e.value)}
                layoutClassName={stylesCard.dropdown}
              />
            )}
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
          disabled={disabled}
        />
      </div>
      <div className={stylesCard.buttons}>
        <ButtonBotTemplate
          onClick={clearInputs}
          buttonHtmlType="button"
          color="white"
        >
          Отменить
        </ButtonBotTemplate>
        <ButtonBotTemplate buttonHtmlType="button" color="blue">
          Сохранить изменения
        </ButtonBotTemplate>
      </div>
    </div>
  );
};

export default BotTemplatesCard;
