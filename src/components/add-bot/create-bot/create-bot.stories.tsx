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
    stepFirst: {
      type: 'string',
      description: 'Вариант первого шага',
      defaultValue: 'default',
      options: ['default', 'upload'],
      control: {
        type: 'radio',
      },
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
    stepFirst: 'upload',
    botURI: false,
  },
};

export const CreateBotTelegram: Story = {
  args: {
    botName: 'Telegram',
    stepFirst: 'default',
    botURI: false,
  },
};

export const CreateBotViber: Story = {
  args: {
    botName: 'Viber',
    stepFirst: 'default',
    botURI: true,
  },
};
