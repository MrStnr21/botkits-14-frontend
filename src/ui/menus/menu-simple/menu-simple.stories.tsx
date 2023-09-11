import type { Meta, StoryFn } from '@storybook/react';
import MenuSimple, { IMenuSimple } from './menu-simple';

const a = ['asd', 'dsd', 'sad', 'klfd', 'sa'];

export default {
  title: 'UI/Menus/Menu-Simple',
  component: MenuSimple,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: 'default',
      options: ['default', 'circle'],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      description: 'Вариант размера кнопки',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    color: {
      type: 'string',
      description: 'Вариант цвета кнопки',
      defaultValue: 'blue',
      options: ['blue', 'green', 'grey'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      type: 'boolean',
      description: 'Вариант активности кнопки',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    buttonHtmlType: {
      type: 'string',
      description: 'Вариант кнопки',
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
    children: {
      type: 'string',
      description: 'Текст кнопки',
      name: 'label',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenuSimple>;

const Template: StoryFn<IMenuSimple> = (args) => <MenuSimple {...args} />;

export const Blue = {
  args: { buttons: a, size: 'medium', isActive: true },
  render: Template,
};
