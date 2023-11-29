export interface ImockBotTemplates {
  _id: string;
  type: string;
  title: string;
  description: string;
  icon: string;
  messengers?: string[];
  profile?: string;
  features?: string[];
  settings?: object;
  commands: string[];
  price: number;
  content: object[];
  isToPublish: boolean;
}
export const mockBotTemplates = [
  {
    _id: '6552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Бот автоответчик',
    description:
      'Бот ответит стандартным сообщением на запрос от человека. Подходит для всех мессенджеров. Шаблон возможно изменить под ваши цели.',
    icon: 'answering machine',
    messengers: [],
    profile: null,
    features: [],
    settings: {},
    commands: [
      'Копировать бота',
      'Удалить',
      'Переименовать',
      'Общий доступ',
      'Получить ссылку',
      'Информация',
      'Настройка уведомлений',
    ],
    price: 1000,
    content: [{}],
    isToPublish: true,
  },
  {
    _id: '7552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Демо бот',
    description: '',
    icon: 'banking',
    messengers: [],
    profile: null,
    features: [],
    settings: {},
    commands: [
      'Копировать бота',
      'Удалить',
      'Переименовать',
      'Общий доступ',
      'Получить ссылку',
      'Информация',
      'Настройка уведомлений',
    ],
    price: 1200,
    content: [{}],
    isToPublish: true,
  },
  {
    _id: '8552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Доставка еды',
    description: '',
    icon: 'food delivery',
    messengers: [],
    profile: null,
    features: [],
    settings: {},
    commands: [
      'Копировать бота',
      'Удалить',
      'Переименовать',
      'Общий доступ',
      'Получить ссылку',
      'Информация',
      'Настройка уведомлений',
    ],
    price: 1500,
    content: [{}],
    isToPublish: true,
  },
];
