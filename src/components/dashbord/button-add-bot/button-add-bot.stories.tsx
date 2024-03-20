import type { Meta, StoryFn } from '@storybook/react';
import ButtonAddBot, { IButtonAddBot } from './button-add-bot';

export default {
  title: 'Components/Dashboard/Button Add Bot',
  component: ButtonAddBot,
  argTypes: {
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
} as Meta<IButtonAddBot>;

const Template: StoryFn<IButtonAddBot> = (args) => <ButtonAddBot {...args} />;

export const Button = {
  args: {
    children: 'Добавить бота',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};
