import type { Meta, StoryFn } from '@storybook/react';
import MenuVariable, { IMenuVariable } from './menu-variable';

const buttons = [
  'Переменная 1',
  'Переменная 2',
  'Переменная 3',
  'Переменная 4',
];

export default {
  title: 'UI/Menus/Menu-Variable',
  component: MenuVariable,
  argTypes: {
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
} as Meta<IMenuVariable>;

const Template: StoryFn<IMenuVariable> = (args) => <MenuVariable {...args} />;

export const menuVariable = {
  args: { buttons },
  render: Template,
};
