import { FC } from 'react';
import { TBot } from '../../../services/types/bot';
import { BotActionValue } from './utils';
import FormPopup from './form-popup';
import InfoPopup from './info-popup';
import LinkPopup from './link-popup';
import ModalPopup from '../modal-popup/modal-popup';

import {
  mockAccessKey,
  mockChannelLink,
  mockChannelName,
  mockDisableNotufyLink,
  mockNotifyLink,
} from '../../../utils/mockBotActionsValues';
import ConfirmDeletePopup from '../confirm-delete-popup/confirm-delete-popup';

interface IPopupRouter {
  action: BotActionValue;
  bot: TBot;
  close: () => void;
  handlers: {
    [key: string]: ((value: string) => void) | (() => void);
  };
}

const PopupRouter: FC<IPopupRouter> = ({ action, bot, close, handlers }) => {
  const { handleShare, handleRename, handleDelete } = handlers;

  const getPopup = (actionValue: typeof action) => {
    switch (actionValue) {
      case 'share':
        return (
          <FormPopup
            title="Поделитесь доступом к боту"
            placeholder="Добавьте e-mail пользователя"
            inputType="email"
            buttonText="Поделиться"
            value=""
            onConfirm={(email: string) => {
              handleShare(email);
            }}
            onCancel={close}
          />
        );
      case 'rename':
        return (
          <FormPopup
            title="Переименуйте файл"
            placeholder="Переименуйте файл"
            buttonText="Переименовать"
            value={bot.title}
            onConfirm={(email: string) => handleRename(email)}
            onCancel={close}
          />
        );
      case 'getLink':
        return (
          <LinkPopup
            title="Скопируйте ссылку"
            placeholder="Ссылка на бота"
            link={mockChannelLink}
          />
        );
      case 'getInfo':
        return (
          <InfoPopup
            title="Информация о подключении"
            successCopyText="Ключ доступа скопирован"
            info={[
              {
                title: 'Название канала',
                value: mockChannelName,
                toCopy: false,
              },
              {
                title: 'Ключ доступа',
                value: mockAccessKey,
                toCopy: true,
              },
            ]}
          />
        );
      case 'setNotifications':
        return (
          <InfoPopup
            title="Настройка уведомлений"
            successCopyText="Ссылка скопирована"
            info={[
              {
                title: 'Подписаться на уведомления',
                value: mockNotifyLink,
                toCopy: true,
              },
              {
                title: 'Отписаться от уведомлений',
                value: mockDisableNotufyLink,
                toCopy: true,
              },
            ]}
          />
        );
      case 'delete':
        return (
          <ConfirmDeletePopup
            onSubmitClick={handleDelete as () => void}
            onCancelClick={close}
          />
        );
      default:
        return (
          <div>Что-то пошло не так. Наши специалисты уже работают над этим</div>
        );
    }
  };

  return <ModalPopup onClick={close}>{getPopup(action)}</ModalPopup>;
};

export default PopupRouter;
