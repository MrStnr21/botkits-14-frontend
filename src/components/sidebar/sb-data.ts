/* eslint-disable import/no-named-as-default */
import dashboardIcon from '../../images/icon/side bar/dashboard';
import mailingIcon from '../../images/icon/side bar/mailing';
import constructorIcon from '../../images/icon/side bar/constructor';
import listsIcon from '../../images/icon/side bar/lists';
import chartsIcon from '../../images/icon/side bar/charts';
import accessIcon from '../../images/icon/side bar/access';
import dialogueIcon from '../../images/icon/side bar/dialogue';
import rocketIcon from '../../images/icon/side bar/rocket';
import minilandingIcon from '../../images/icon/side bar/minilanding';
import crmIcon from '../../images/icon/side bar/crm';

export interface ILink {
  navLink: string;
  icon?: JSX.Element;
  text: string;
  child?: Array<ILink>;
}

export const links: Array<ILink> = [
  {
    navLink: '/',
    icon: dashboardIcon,
    text: 'Дашборд',
  },
  {
    navLink: '/bot-builder',
    icon: constructorIcon,
    text: 'Воронки',
  },
  {
    navLink: '/mailing',
    icon: mailingIcon,
    text: 'Рассылки',
  },
  {
    navLink: '/lists',
    icon: listsIcon,
    text: 'Списки',
  },
  {
    navLink: '/subscription',
    icon: chartsIcon,
    text: 'Статистика',
  },
  {
    navLink: '/chat',
    icon: dialogueIcon,
    text: 'Диалоги',
  },
  {
    navLink: '/partnership',
    icon: rocketIcon,
    text: 'Партнерская программа',
  },
  {
    navLink: '/share',
    icon: accessIcon,
    text: 'Общий доступ',
  },
  {
    navLink: '/minilanding',
    icon: minilandingIcon,
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
    icon: crmIcon,
    text: 'CRM',
  },
];
