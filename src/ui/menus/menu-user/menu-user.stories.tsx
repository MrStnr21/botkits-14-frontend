import type { Meta, StoryFn } from '@storybook/react';
import MenuUser, { IMenuUser } from './menu-user';

export default {
  title: 'UI/Menus/Menu-User',
  component: MenuUser,
  argTypes: {
    top: {
      type: 'number',
      description: 'Абсолютный отступ сверху',
      defaultValue: 0,
    },
    left: {
      type: 'number',
      description: 'Абсолютный отступ слева',
      defaultValue: 0,
    },
    isActive: {
      type: 'boolean',
      description: 'Открыто ли меню',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenuUser>;

const Template: StoryFn<IMenuUser> = (args) => <MenuUser {...args} />;

export const menuUser = {
  args: { isActive: true },
  render: Template,
};
