import { FC } from 'react';

import BotMenuPopup from '../bot-menu-popup/bot-menu-popup';

import { useAppSelector } from '../../../services/hooks/hooks';

import { POPUP_ITEM } from '../../../utils/constants';
import { getBotsSel } from '../../../utils/selectorData';

interface IPopupMoreMyBot {
  itemSelected: POPUP_ITEM | undefined;
  setIsPopupItemOpen: () => void;
  idMyBot: string;
}

const SwitchBotMenuPopup: FC<IPopupMoreMyBot> = ({
  itemSelected,
  setIsPopupItemOpen,
  idMyBot,
}): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(`Берем данные для бота по id ${idMyBot}`);

  // const bots: Array<TBot> | undefined = useAppSelector(
  //   (store) => store.getBot.bot
  // );

  const { bots } = useAppSelector(getBotsSel);

  // if (Array.isArray(bots) && bots.length > 0) {
  //   // eslint-disable-next-line no-underscore-dangle
  //   currentBot = bots.find((bot) => bot._id === idMyBot);
  // }

  let child: React.ReactNode;

  switch (itemSelected) {
    case POPUP_ITEM.INFO: {
      child = (
        <BotMenuPopup
          type="info"
          title="Иноформация о подключении"
          placeholder="none"
          buttonText="none"
          value="info"
          onClose={setIsPopupItemOpen}
        />
      );
      break;
    }
    case POPUP_ITEM.SHARE: {
      child = (
        <BotMenuPopup
          type="default"
          title="Поделитесь доступом к боту"
          placeholder="Добавьте e-mail пользователя"
          buttonText="поделиться"
          value="string"
          onClose={setIsPopupItemOpen}
        />
      );
      break;
    }
    case POPUP_ITEM.RENAME: {
      child = (
        <BotMenuPopup
          type="default"
          title="Переименуйте файл"
          placeholder="Переименуйте файл"
          buttonText="Переименовать"
          value={bots ? bots[0].title : 'Псевдоним'}
          onClose={setIsPopupItemOpen}
          // onClick={() => console.log('переименовывайся')}
        />
      );
      break;
    }
    case POPUP_ITEM.LINK: {
      child = (
        <BotMenuPopup
          type="default"
          title="Скопируйте ссылку"
          buttonText="скопировать ссылку"
          placeholder="Ссылка на бота"
          value="string"
          onClose={setIsPopupItemOpen}
          isLink
        />
      );
      break;
    }
    case POPUP_ITEM.NOTIFSETT: {
      child = (
        <BotMenuPopup
          type="info"
          title="Настройка уведомлений"
          buttonText="none"
          placeholder="none"
          value="string"
          onClose={setIsPopupItemOpen}
          isLink
        />
      );
      break;
    }
    default: {
      child = (
        <div>Что-то пошло не так. Наши специалисты уже работают над этим</div>
      );
      break;
    }
  }

  return <div>{child}</div>;
};

export default SwitchBotMenuPopup;
