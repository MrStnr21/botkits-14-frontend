import type { Meta, StoryFn } from '@storybook/react';
import BotName, { IBotName } from './bot-name';
import fb from '../../../assets/icons/40x40/facebook/hover.svg';
import tg from '../../../assets/icons/40x40/telegram/hover.svg';
import alisa from '../../../assets/icons/40x40/alisa/hover.svg';
import google from '../../../assets/icons/40x40/google/hover.svg';
import inst from '../../../assets/icons/40x40/insta/hover.svg';
import mail from '../../../assets/icons/40x40/mailru/hover.svg';
import ok from '../../../assets/icons/40x40/odnoklassniki/hover.svg';
import twit from '../../../assets/icons/40x40/twitter/hover.svg';
import viber from '../../../assets/icons/40x40/viber/hover.svg';
import vk from '../../../assets/icons/40x40/vk/hover.svg';
import web from '../../../assets/icons/40x40/web/hover.svg';
import whats from '../../../assets/icons/40x40/whatsapp/hover.svg';
import ya from '../../../assets/icons/40x40/yandex/hover.svg';
import yt from '../../../assets/icons/40x40/youtube/hover.svg';

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
  title: 'COMPONENTS/Builder/BotName',
  component: BotName,
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
    isUpdating: {
      type: 'boolean',
    },
  },
} as Meta<IBotName>;

const Template: StoryFn<IBotName> = (args) => <BotName {...args} />;

export const Default = {
  args: {
    platform_icon: fb,
  },
  render: Template,
};
