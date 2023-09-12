import type { Meta, StoryFn } from '@storybook/react';
import MenuSimple, { IMenuSimple } from './menu-simple';

const buttons = ['По дням', 'По неделям', 'По месяцам', 'По годам'];

export default {
  title: 'UI/Menus/Menu-Simple',
  component: MenuSimple,
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
    buttons: {
      description: 'Кнопки в меню',
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
    onClick: {
      action: 'clicked',
      description:
        'Callback функция, вызываемая при клике. Сюда передать стрелочную функцию с одним аргументом и setState с этим аргументом',
    },
    size: {
      type: 'string',
      description: 'Размер меню',
      defaultValue: 'default',
      options: ['small', 'medium', 'default', 'large'],
      control: {
        type: 'radio',
      },
    },
    isScroll: {
      type: 'boolean',
      description: '',
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
} as Meta<IMenuSimple>;

const Template: StoryFn<IMenuSimple> = (args) => <MenuSimple {...args} />;

export const menuSimple = {
  args: { buttons, size: 'default', isActive: true },
  render: Template,
};
