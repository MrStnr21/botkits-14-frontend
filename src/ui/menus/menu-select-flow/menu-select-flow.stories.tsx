import type { Meta, StoryFn } from '@storybook/react';
import MenuSelectFlow, { IMenuSelectFlow } from './menu-select-flow';

const buttons = [
  'Переменная 1',
  'Переменная 2',
  'Переменная 3',
  'Переменная 4',
];

export default {
  title: 'UI/Menus/Menumenu-Select-Flow',
  component: MenuSelectFlow,
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
} as Meta<IMenuSelectFlow>;

const Template: StoryFn<IMenuSelectFlow> = (args) => (
  <MenuSelectFlow {...args} />
);

export const MenuSelectFlowFilled = {
  args: { buttons },
  render: Template,
};
