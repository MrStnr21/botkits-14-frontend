import type { Meta, StoryFn } from '@storybook/react';
import ButtonIconCopy, { IButtonIconCopy } from './button-icon-copy';

export default {
  title: 'UI/Buttons/ButtonIconCopy',
  component: ButtonIconCopy,
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
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IButtonIconCopy>;

const Template: StoryFn<IButtonIconCopy> = (args) => (
  <ButtonIconCopy {...args} />
);

export const Button = {
  args: {
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};
