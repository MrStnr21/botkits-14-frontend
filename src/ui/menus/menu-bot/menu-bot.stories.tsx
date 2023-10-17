import type { Meta, StoryFn } from '@storybook/react';
import MenuBot, { IMenuBot } from './menu-bot';

export default {
  title: 'UI/Menus/Menu-Bot',
  component: MenuBot,
  argTypes: {
    isActive: {
      type: 'boolean',
      description: 'Открыто ли меню',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      description: 'Размер меню',
      defaultValue: 'default',
      options: ['medium', 'large', 'default'],
      control: {
        type: 'radio',
      },
    },
    editFunction: {
      description: 'Функция для редактирования названия бота',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenuBot>;

const Template: StoryFn<IMenuBot> = (args) => <MenuBot {...args} />;

export const menuBot = {
  args: {
    isActive: true,
    size: 'large',
    editFunction: () => {
      console.log(1);
    },
  },
  render: Template,
};
