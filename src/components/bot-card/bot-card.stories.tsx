import type { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BotCard, { IBotCard } from './bot-card';
import fb from '../../images/icon/40x40/facebook/default.svg';
import tg from '../../images/icon/40x40/telegram/default.svg';
import alisa from '../../images/icon/40x40/alisa/default.svg';
import google from '../../images/icon/40x40/google/default.svg';
import inst from '../../images/icon/40x40/insta/default.svg';
import mail from '../../images/icon/40x40/mailru/default.svg';
import ok from '../../images/icon/40x40/odnoklassniki/default.svg';
import twit from '../../images/icon/40x40/twitter/default.svg';
import viber from '../../images/icon/40x40/viber/default.svg';
import vk from '../../images/icon/40x40/vk/default.svg';
import web from '../../images/icon/40x40/web/default.svg';
import whats from '../../images/icon/40x40/whatsapp/default.svg';
import ya from '../../images/icon/40x40/yandex/default.svg';
import yt from '../../images/icon/40x40/youtube/default.svg';
import { TBot } from '../../services/types/bot';

const icons = {
  fb,
  tg,
  alisa,
  google,
  inst,
  mail,
  ok,
  twit,
  web,
  whats,
  viber,
  vk,
  ya,
  yt,
};

export default {
  title: 'Components/BotCard',
  component: BotCard,
  argTypes: {
    platform_icon: {
      type: 'string',
      description: 'Вариант платформы',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: {
          fb: 'Facebook',
          tg: 'Telegram',
          alisa: 'Алиса',
          google: 'Google',
          inst: 'Instagram',
          mail: 'Mail',
          ok: 'Одноклассники',
          twit: 'Twitter',
          web: 'Web',
          whats: 'WhatsApp',
          viber: 'Viber',
          vk: 'Вконтакте',
          ya: 'Яндекс',
          yt: 'Youtube',
        },
      },
    },
    bot_name: {
      type: 'string',
      description: 'Название бота',
      defaultValue: ' Название',
    },
    onClick: {
      action: 'clicked',
      description: 'Нажатие на кнопку "Больше" откроет доп меню',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta<IBotCard>;

const Bot: TBot = {
  _id: '0',
  title: 'Бот',
  description: 'none',
  profile: '0',
  messengers: [],
  commands: ['/copy', '/delete', '/rename', '/share', '/info', '/notify'],
  isToPublish: false,
  status: 'editing',
  permission: {
    dashboard: true,
    botBuilder: true,
    mailing: true,
    statistics: true,
  },
};

const Template: StoryFn<IBotCard> = (args) => <BotCard {...args} />;

export const Facebook = {
  args: {
    bot: {
      ...Bot,
      messengers: {
        name: 'Facebook',
        pages: ['Страница'],
        accessKey: '',
        url: '',
      },
    },
  },
  render: Template,
};
