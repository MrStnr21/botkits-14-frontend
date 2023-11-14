import {
  URL_START,
  URL_NEWSLETTER,
  URL_CONFIGURATION,
  URL_STATISTICS,
  URL_DIALOGUES,
  URL_BLOCK_SCHEMES,
} from '../../../utils/config';

interface ILink {
  link?: string;
  text: string;
}

const links: Array<ILink> = [
  {
    link: URL_START,
    text: 'Начало работы в сервисе',
  },
  {
    link: URL_BLOCK_SCHEMES,
    text: 'Блок схемы',
  },
  {
    link: URL_NEWSLETTER,
    text: 'Рассылка',
  },
  {
    link: URL_CONFIGURATION,
    text: 'Конфигурации',
  },
  {
    link: URL_STATISTICS,
    text: 'Статистика',
  },
  {
    link: URL_DIALOGUES,
    text: 'Диалоги',
  },
];
export default links;
