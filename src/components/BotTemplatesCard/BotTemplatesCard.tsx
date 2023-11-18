import { FC, useState } from 'react';
import stylesCard from './BotTemplatesCard.module.scss';
import CheckboxWithText from '../../ui/CheckboxWithText/CheckboxWithText';
import Avatar from '../../ui/avatar/avatar';
import imageAvatar from '../../images/avatar/circled/bot_templates/answering machine.svg';
import EditButton from '../../ui/buttons/button-edit/button-edit';
import MenuBotTemplate from '../../ui/menus/menu-bot/menu-bot-template';
// import Typography from '../../ui/typography/typography';
import ButtonBotTemplate from '../../ui/buttons/button-bot-template/button-bot-template';

interface IBotTemplatesCard {
  image?: string;
  // selectedUser?: any;
}

const BotTemplatesCard: FC<IBotTemplatesCard> = ({ image }) => {
  const [crm, setCrm] = useState(true);
  const [menu, toggleMenu] = useState(false);

  const onCrmChange = () => {
    setCrm(!crm);
  };
  const onClick = () => {
    toggleMenu(!menu);
  };

  return (
    <div className={stylesCard.card}>
      <div className={stylesCard.wrapper}>
        <div className={stylesCard.avatar}>
          <Avatar
            isBot="no"
            state="offline"
            big="yes"
            botTemplates="yes"
            pic={image || imageAvatar}
          />
          <div className={stylesCard.editButton}>
            <EditButton />
          </div>
        </div>
        <div className={stylesCard.more}>
          <button
            type="button"
            className={stylesCard.moreButton}
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
      <CheckboxWithText
        label="Опубликовать"
        name="crm"
        value="crm"
        onChange={onCrmChange}
        checked={crm}
      />
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
