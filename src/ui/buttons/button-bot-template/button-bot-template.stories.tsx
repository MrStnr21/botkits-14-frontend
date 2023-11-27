import type { Meta, StoryFn } from '@storybook/react';
import ButtonBotTemplate, { IButtonBotTemplate } from './button-bot-template';

export default {
  title: 'UI/Buttons/ButtonBotTemplate',
  component: ButtonBotTemplate,
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
    color: {
      type: 'string',
      description: 'Цвет кнопки',
      defaultValue: 'blue',
      options: ['blue', 'white'],
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
} as Meta<IButtonBotTemplate>;

const Template: StoryFn<IButtonBotTemplate> = (args) => (
  <ButtonBotTemplate {...args} />
);

export const Button = {
  args: {
    children: 'Сохранить изменения',
    buttonHtmlType: 'button',
    disabled: false,
    color: 'blue',
  },
  render: Template,
};
