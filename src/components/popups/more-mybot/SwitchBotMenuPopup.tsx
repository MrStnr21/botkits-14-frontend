import { Dispatch, FC, SetStateAction } from 'react';

import BotMenuPopup from '../bot-menu-popup/bot-menu-popup';

import { useAppSelector } from '../../../services/hooks/hooks';
import { TBot } from '../../../services/types/bot';

import { POPUP_ITEM } from '../../../utils/constants';

interface IPopupMoreMyBot {
  itemSelected: POPUP_ITEM | undefined;
  setIsPopupItemOpen: Dispatch<SetStateAction<boolean>>;
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

  const currentBot: TBot | null = useAppSelector((store) => store.getBots.bot);

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
          onClose={() => setIsPopupItemOpen(false)}
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
          onClose={() => setIsPopupItemOpen(false)}
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
          value={currentBot ? currentBot.botName : 'Псевдоним'}
          onClose={() => setIsPopupItemOpen(false)}
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
          onClose={() => setIsPopupItemOpen(false)}
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
          onClose={() => setIsPopupItemOpen(false)}
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
