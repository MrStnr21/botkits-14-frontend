import type { Meta, StoryFn } from '@storybook/react';
import MenuWithCheck, { IMenuWithCheck } from './menu-with-check';

const buttons = [
  { text: 'Список 1', isChecked: false },
  { text: 'Список 2', isChecked: false },
  { text: 'Список 3', isChecked: false },
];

const WithCheck = [
  { text: 'Список 1', isChecked: true },
  { text: 'Список 2', isChecked: false },
  { text: 'Список 3', isChecked: true },
];

export default {
  title: 'UI/Menus/Menu-With-Check',
  component: MenuWithCheck,
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
    buttons: {
      description: 'Кнопки в меню',
    },
    onClick: {
      action: 'clicked',
      description:
        'Callback функция, вызываемая при клике. Сюда передать стрелочную функцию с одним аргументом и setState с этим аргументом',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenuWithCheck>;

const Template: StoryFn<IMenuWithCheck> = (args) => <MenuWithCheck {...args} />;

export const menuWithOutCheck = {
  args: { buttons, isActive: true },
  render: Template,
};

export const menuWithCheck = {
  args: { buttons: WithCheck, isActive: true },
  render: Template,
};
