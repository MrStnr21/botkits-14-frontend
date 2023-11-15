import type { Meta, StoryFn } from '@storybook/react';
import ButtonNotBackground, {
  IButtonNotBackground,
} from './button-not-background';

export default {
  title: 'UI/Buttons/ButtonNotBackground',
  component: ButtonNotBackground,
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
} as Meta<IButtonNotBackground>;

const Template: StoryFn<IButtonNotBackground> = (args) => (
  <ButtonNotBackground {...args} />
);

export const Button = {
  args: {
    children: 'Все',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};
