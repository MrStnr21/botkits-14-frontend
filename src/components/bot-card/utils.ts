import { IconName } from '../../ui/icon/utils';
import { Option } from '../../utils/types';

type ImageMap = {
  [key: string]: IconName;
};

const messengerIcons: ImageMap = {
  Facebook: 'facebookHover',
  Telegram: 'telegramHover',
  Viber: 'viberHover',
  VK: 'vkHover',
  Odnoklassniki: 'odnoklassnikiHover',
  Алиса: 'alisaHover',
  Whatsapp: 'whatsappHover',
  Instagram: 'instaHover',
  'Веб-сайт': 'webHover',
};

type BotActionValues =
  | 'copy'
  | 'share'
  | 'rename'
  | 'getLink'
  | 'getInfo'
  | 'setNotifications'
  | 'delete';

type BotActionsOption = Omit<Option, 'value'> & { value: BotActionValues };

const botActions: BotActionsOption[] = [
  {
    icon: 'dropdownCopyBot',
    value: 'copy',
    label: 'Копировать бота',
  },
  {
    icon: 'dropdownShare',
    value: 'share',
    label: 'Общий доступ',
  },
  {
    icon: 'dropdownEdit',
    value: 'rename',
    label: 'Переименовать',
  },
  {
    icon: 'dropdownLink',
    value: 'getLink',
    label: 'Получить ссылку',
  },
  {
    icon: 'dropdownInfo',
    value: 'getInfo',
    label: 'Информация',
  },
  {
    icon: 'dropdownNotificationsSetting',
    value: 'setNotifications',
    label: 'Настройка уведомлений',
  },
  {
    icon: 'dropdownTrash',
    value: 'delete',
    label: 'Удалить',
  },
];

export { messengerIcons, botActions };
export type { BotActionValues, BotActionsOption };
