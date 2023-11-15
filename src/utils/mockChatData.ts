export interface IMessage {
  id: number;
  avatar: string;
  user: string;
  message: string;
  time: string;
  online: boolean;
  seen: string;
  status: 'read' | 'unread';
}

export interface IUser {
  id: string | null;
  name: string | null;
  status: 'online' | 'offline' | null;
  messages: IMessage[];
  lastMessageAt: string | null;
}

export interface IChatData {
  user: IUser;
}

export const testData: IChatData[] = [
  {
    user: {
      id: '1',
      name: 'Вячеслав Баумтрок',
      status: 'online',
      lastMessageAt: '2023-11-15 00:30:22',
      messages: [
        {
          id: 1,
          avatar: '',
          user: 'Вячеслав Баумтрок',
          message: 'Привет, как это сделать?',
          time: '16 мин назад',
          online: false,
          seen: '14:05',
          status: 'read',
        },
        {
          id: 2,
          avatar: '',
          user: 'Вы',
          message: `Привет, user, вообще делать не надо`,
          time: '14 мин назад',
          online: true,
          seen: '14:12',
          status: 'read',
        },
        {
          id: 3,
          avatar: '',
          user: 'Вячеслав Баумтрок',
          message: 'Ок, спасибо :)',
          time: '10 мин назад',
          online: false,
          seen: '14:15',
          status: 'read',
        },
      ],
    },
  },
  {
    user: {
      id: '2',
      name: 'Галя',
      status: 'online',
      lastMessageAt: '2023-11-11 13:15:00',
      messages: [
        {
          id: 1,
          avatar: '',
          user: 'Галя',
          message: 'Привет, пивка?',
          time: '23 мин назад',
          online: false,
          seen: '14:05',
          status: 'read',
        },
        {
          id: 2,
          avatar: '',
          user: 'Вы',
          message: `Пивка!`,
          time: '21 мин назад',
          online: true,
          seen: '14:12',
          status: 'read',
        },
        {
          id: 3,
          avatar: '',
          user: 'Галя',
          message: 'До встречи вечером!',
          time: '16 мин назад',
          online: false,
          seen: '14:15',
          status: 'unread',
        },
      ],
    },
  },
  {
    user: {
      id: '3',
      name: 'Алексей Тимлид',
      status: 'offline',
      lastMessageAt: '2023-11-9 19:25:17',
      messages: [
        {
          id: 1,
          avatar: '',
          user: 'Вы',
          message: 'Леха, проверишь?',
          time: '16 мин назад',
          online: false,
          seen: '14:05',
          status: 'unread',
        },
        {
          id: 2,
          avatar: '',
          user: 'Алексей',
          message: `Я устал`,
          time: '14 мин назад',
          online: true,
          seen: '14:12',
          status: 'unread',
        },
        {
          id: 3,
          avatar: '',
          user: 'Вы',
          message: 'Понял',
          time: '10 мин назад',
          online: false,
          seen: '14:15',
          status: 'unread',
        },
      ],
    },
  },
  {
    user: {
      id: '4',
      name: 'Владислав Иванченко',
      status: 'offline',
      lastMessageAt: '2023-10-27 13:00:00',
      messages: [
        {
          id: 1,
          avatar: '',
          user: 'Вячеслав Баумтрок',
          message: 'Привет, как это сделать?',
          time: '16 мин назад',
          online: false,
          seen: '14:05',
          status: 'unread',
        },
        {
          id: 2,
          avatar: '',
          user: 'Вы',
          message: `Привет, вообще делать не надо`,
          time: '14 мин назад',
          online: true,
          seen: '14:12',
          status: 'read',
        },
        {
          id: 3,
          avatar: '',
          user: 'Вячеслав Баумтрок',
          message: 'Ок, спасибо :)',
          time: '10 мин назад',
          online: false,
          seen: '14:15',
          status: 'unread',
        },
      ],
    },
  },
  {
    user: {
      id: '5',
      name: 'Артемий Лебедев',
      status: 'online',
      lastMessageAt: '2023-09-27 13:15:00',
      messages: [
        {
          id: 1,
          avatar: '',
          user: 'Артемий Лебедев',
          message: 'Привет, дизайн за миллион?',
          time: '16 мин назад',
          online: false,
          seen: '14:05',
          status: 'unread',
        },
        {
          id: 2,
          avatar: '',
          user: 'Вы',
          message: `Привет, Артемий, конечно дизайн за миллион`,
          time: '14 мин назад',
          online: true,
          seen: '14:12',
          status: 'read',
        },
        {
          id: 3,
          avatar: '',
          user: 'Артемий Лебедев',
          message: 'Вот вам буква "М"',
          time: '10 мин назад',
          online: false,
          seen: '14:15',
          status: 'unread',
        },
        {
          id: 4,
          avatar: '',
          user: 'Вы',
          message: 'М - типа миллион?',
          time: '8 мин назад',
          online: false,
          seen: '14:15',
          status: 'unread',
        },
        {
          id: 5,
          avatar: '',
          user: 'Артемий Лебедев',
          message: 'Да ))))',
          time: '5 мин назад',
          online: false,
          seen: '14:15',
          status: 'unread',
        },
      ],
    },
  },
];
