import type { Meta, StoryFn } from '@storybook/react';
import Button, { IButton } from './button';

export default {
  title: 'UI/Buttons/Button',
  component: Button,
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
      options: ['medium', 'large'],
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
} as Meta<IButton>;

const Template: StoryFn<IButton> = (args) => <Button {...args} />;

export const Blue = {
  args: {
    children: 'добавить бота',
    variant: 'default',
    size: 'medium',
    color: 'blue',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};

export const Green = {
  args: {
    children: 'добавить бота',
    variant: 'default',
    size: 'medium',
    color: 'green',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};

export const Grey = {
  args: {
    children: 'остановить',
    variant: 'default',
    size: 'medium',
    color: 'grey',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};
