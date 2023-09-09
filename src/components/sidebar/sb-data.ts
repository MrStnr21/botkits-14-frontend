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

interface ILink {
  navLink: string;
  icon: JSX.Element;
  alt: string;
  text: string;
  child?: Array<{
    navLink: string;
    text: string;
  }>;
}

const links: Array<ILink> = [
  {
    navLink: '/',
    icon: dashboardIcon,
    alt: 'Дашборд.',
    text: 'Дашборд',
  },
  {
    navLink: '/bot-builder',
    icon: constructorIcon,
    alt: 'Воронки.',
    text: 'Воронки',
  },
  {
    navLink: '/mailing',
    icon: mailingIcon,
    alt: 'Рассылки.',
    text: 'Рассылки',
  },
  {
    navLink: '/lists',
    icon: listsIcon,
    alt: 'Списки.',
    text: 'Списки',
  },
  {
    navLink: '/subscription',
    icon: chartsIcon,
    alt: 'Статистика.',
    text: 'Статистика',
  },
  {
    navLink: '/chat',
    icon: dialogueIcon,
    alt: 'Диалоги.',
    text: 'Диалоги',
  },
  {
    navLink: '/partnership',
    icon: rocketIcon,
    alt: 'Партнерская программа.',
    text: 'Партнерская программа',
  },
  {
    navLink: '/share',
    icon: accessIcon,
    alt: 'Общий доступ',
    text: 'Общий доступ',
  },
  {
    navLink: '/minilanding',
    icon: minilandingIcon,
    alt: 'Мини-лендинг',
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
    alt: 'CRM',
    text: 'CRM',
  },
];

export default links;
