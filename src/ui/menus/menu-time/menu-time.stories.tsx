import type { Meta, StoryFn } from '@storybook/react';
import MenuTime, { IMenuTime } from './menu-time';

export default {
  title: 'UI/Menus/Menu-Time',
  component: MenuTime,
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
    saveFunction: {
      action: 'clicked',
      description:
        'Callback функция, вызываемая при клике по кнопке "Сохранить". Сюда надо передать функцию с одним аргументом и setState с этим аргументом',
    },
    clearFunction: {
      action: 'clicked',
      description:
        'Callback функция, вызываемая при клике по кнопку "Очистить". Сюда передать функцию с setState, который сбрасывает значение',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenuTime>;

const Template: StoryFn<IMenuTime> = (args) => <MenuTime {...args} />;

export const menuTime = {
  args: { isActive: true },
  render: Template,
};
