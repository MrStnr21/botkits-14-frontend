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
      id: '2',
      name: 'Галя',
      status: 'offline',
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
          status: 'unread',
        },
      ],
    },
  },
  {
    user: {
      id: '4',
      name: 'Артемий Лебедев',
      status: 'online',
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
