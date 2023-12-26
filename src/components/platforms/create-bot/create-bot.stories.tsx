import type { StoryObj } from '@storybook/react';
import CreateBot from './create-bot';

const meta = {
  title: 'COMPONENTS/CreateBot',
  component: CreateBot,
  argTypes: {
    botName: {
      type: 'string',
      description: 'Название платформы',
      defaultValue: 'Facebook',
      options: [
        'Facebook',
        'Viber',
        'Telegram',
        'VK',
        'Алиса',
        'Whatsapp',
        'Instagram',
        'Веб-сайт',
      ],
      control: {
        type: 'select',
      },
    },
    pages: {
      type: 'boolean',
      description: 'Вариант первого шага',
      defaultValue: false,
    },
    botURI: {
      type: 'boolean',
      description: 'Шаг с URI',
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateBotFacebook: Story = {
  args: {
    botName: 'Facebook',
    pages: true,
    botURI: false,
    templateId: null,
    templateTitle: null,
  },
};

export const CreateBotTelegram: Story = {
  args: {
    botName: 'Telegram',
    pages: false,
    botURI: false,
    templateId: null,
    templateTitle: null,
  },
};

export const CreateBotViber: Story = {
  args: {
    botName: 'Viber',
    pages: false,
    botURI: true,
    templateId: null,
    templateTitle: null,
  },
};
