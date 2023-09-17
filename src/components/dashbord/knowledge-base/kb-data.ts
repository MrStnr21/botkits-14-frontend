interface ILink {
  link: string;
  text: string;
}

const links: Array<ILink> = [
  {
    link: 'https://botkits.ru/start/',
    text: 'Начало работы в сервисе',
  },
  {
    link: 'https://botkits.ru/block-schemes/',
    text: 'Блок схемы',
  },
  {
    link: 'https://botkits.ru/newsletter/',
    text: 'Рассылка',
  },
  {
    link: 'https://botkits.ru/configuration/ ',
    text: 'Конфигурации',
  },
  {
    link: 'https://botkits.ru/statistics/ ',
    text: 'Статистика',
  },
  {
    link: 'https://botkits.ru/dialogues/ ',
    text: 'Диалоги',
  },
];
export default links;
