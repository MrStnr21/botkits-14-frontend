import { FC, useState } from 'react';
import stylesCard from './BotTemplatesCard.module.scss';
import CheckboxWithText from '../../ui/CheckboxWithText/CheckboxWithText';
import Avatar from '../../ui/avatar/avatar';
import imageAvatar from '../../images/avatar/circled/bot_templates/answering machine.svg';
import EditButton from '../../ui/buttons/button-edit/button-edit';
import MenuBotTemplate from '../../ui/menus/menu-bot/menu-bot-template';
import ButtonBotTemplate from '../../ui/buttons/button-bot-template/button-bot-template';
import InputTemplate from '../../ui/inputs/input-template/input-template';

import { BUTTON_NAME } from '../../utils/constants';

interface IBotTemplatesCard {
  image?: string;
  nameBot?: string;
}

const BotTemplatesCard: FC<IBotTemplatesCard> = ({ image, nameBot }) => {
  const [crm, setCrm] = useState(true);
  const [menu, toggleMenu] = useState(false);
  const [imageEdit, setImageEdit] = useState<string>();

  const onCrmChange = () => {
    setCrm(!crm);
  };
  const onClick = () => {
    toggleMenu(!menu);
  };

  const onClickEditAvatar = () => {
    document.getElementById('upload-file')!.click();
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
              pic={imageEdit || image || imageAvatar}
            />
            <div className={stylesCard.editButton}>
              <input
                type="file"
                id="upload-file"
                hidden
                accept="image/*"
                onChange={({ target: { files } }) => {
                  if (files![0]) {
                    setImageEdit(URL.createObjectURL(files![0]));
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
              type="button"
              className={stylesCard.more__Button}
              onClick={onClick}
            >
              {' '}
            </button>
            {menu && (
              <MenuBotTemplate
                builderFunction={() => {}}
                isActive={menu}
                top={0}
                left={30}
                removeFunction={() => {}}
              />
            )}
          </div>
        </div>
        <InputTemplate
          size="small"
          color="black"
          placeholder="Название бота"
          value={nameBot}
        />
        <InputTemplate size="big" color="grey" placeholder="Описание бота..." />
        <InputTemplate size="small" color="grey" placeholder="Цена в рублях" />
        <CheckboxWithText
          label="Опубликовать"
          name="crm"
          value="crm"
          onChange={onCrmChange}
          checked={crm}
        />
      </div>
      <div className={stylesCard.buttons}>
        <ButtonBotTemplate buttonHtmlType="button" color="white">
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
