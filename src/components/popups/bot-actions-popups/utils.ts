import type { Option } from '../../../utils/types';

type BotActionValue =
  | 'copy'
  | 'share'
  | 'rename'
  | 'getLink'
  | 'getInfo'
  | 'setNotifications'
  | 'delete';

type BotActionsOption = Omit<Option, 'value'> & { value: BotActionValue };

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

export type { BotActionValue, BotActionsOption };
export { botActions };
