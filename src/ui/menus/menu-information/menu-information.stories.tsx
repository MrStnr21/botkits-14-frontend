import type { Meta, StoryFn } from '@storybook/react';
import MenuInformation, { IMenuInformation } from './menu-information';

export default {
  title: 'UI/Menus/Menu Information',
  component: MenuInformation,
  argTypes: {
    width: {
      type: 'number',
      description: 'Ширина кнопки меню',
      defaultValue: 0,
    },
    height: {
      type: 'number',
      description: 'Высота кнопки меню',
      defaultValue: 0,
    },
    isActive: {
      type: 'boolean',
      description: 'Активная кнопка',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    type: {
      type: 'boolean',
      description: 'Вид меню',
      defaultValue: 'isInformation',
      options: ['isInformation', 'isNotifications', 'isBuilder'],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenuInformation>;

const Template: StoryFn<IMenuInformation> = (args) => (
  <MenuInformation {...args} />
);

export const NavMenuInformation = {
  args: {
    width: 125,
    height: 40,
    isActive: true,
    valueOne: 'Информация',
    valueTwo: 'Файлы',
    type: 'isInformation',
  },
  render: Template,
};
