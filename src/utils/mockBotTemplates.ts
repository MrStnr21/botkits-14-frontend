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
    content: [{}],
    isToPublish: true,
  },
  {
    _id: '7552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Демо бот',
    description: 'Бот для показа демо',
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
    content: [{}],
    isToPublish: true,
  },
  {
    _id: '8552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Доставка еды',
    description: 'Бот поможет оформить заказ в ресторане',
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
    content: [{}],
    isToPublish: true,
  },
  {
    _id: '9552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Опрос',
    description: 'Бот для проведения опросов',
    icon: 'e-learning',
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
    content: [{}],
    isToPublish: true,
  },
  {
    _id: '1552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Лидогенерация/HR ререререре...',
    description: 'Бот для генерации лидов и HR задач',
    icon: 'lead generation',
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
    content: [{}],
    isToPublish: false,
  },
  {
    _id: '2552710c003b4c9083cc24ac',
    type: 'template',
    title: 'Онлайн школа/Вебинар',
    description: 'Бот для организации онлайн-школы или вебинаров',
    icon: 'poll',
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
    content: [{}],
    isToPublish: true,
  },
];
