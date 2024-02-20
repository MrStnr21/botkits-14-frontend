/* eslint-disable import/prefer-default-export */
export const logNotifications = [
  {
    _id: '1',
    title: 'Новый общий бот',
    text: 'С вами поделились доступом к боту "Пицца"',
    status: 'success',
    date: '08.23.23',
    goTo: 'myBots',
  },
  {
    _id: '2',
    title: 'Ну вроде все нормально =|',
    status: 'default',
    date: '11.01.23',
  },
  {
    _id: '3',
    title: 'Заканчивается подписка',
    text: 'Продлите подписку',
    status: 'warning',
    date: '02.12.24',
    goTo: 'subscription',
  },
  {
    _id: '4',
    title: 'Подписка закончилась',
    text: 'Боты станут доступны при возобновлении подписки',
    status: 'error',
    date: '03.12.24',
    goTo: 'subscription',
  },
];
