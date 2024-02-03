/* eslint-disable import/no-named-as-default */
import routesUrl from '../../utils/routesData';
import { IconName } from '../../ui/icon/utils';

export interface ILink {
  navLink: string;
  icon?: IconName;
  text: string;
  child?: Array<ILink>;
}

export const links: Array<ILink> = [
  {
    navLink: routesUrl.homePage,
    icon: 'side_dashboard',
    text: 'Дашборд',
  },
  {
    navLink: routesUrl.botBuilder,
    icon: 'side_constructor',
    text: 'Воронки',
  },
  {
    navLink: routesUrl.mailing,
    icon: 'side_mailing',
    text: 'Рассылки',
  },
  {
    navLink: routesUrl.lists || '/lists',
    icon: 'side_lists',
    text: 'Списки',
  },
  {
    navLink: routesUrl.statistics,
    icon: 'side_charts',
    text: 'Статистика',
  },
  {
    navLink: routesUrl.chat,
    icon: 'side_dialogue',
    text: 'Диалоги',
  },
  {
    navLink: routesUrl.partnership,
    icon: 'rocket',
    text: 'Партнерская программа',
  },
  {
    navLink: routesUrl.share,
    icon: 'side_access',
    text: 'Общий доступ',
  },
  {
    navLink: routesUrl.minilanding || '/minilanding',
    icon: 'side_minilanding',
    text: 'Мини-лендинг',
    child: [
      {
        navLink: '/site-vk', // для испытаний
        text: 'Сайт + Vk',
      },
    ],
  },
  {
    navLink: '/crm',
    icon: 'side_crm',
    text: 'CRM',
  },
];
