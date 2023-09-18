import type { Meta, StoryFn } from '@storybook/react';
import ButtonAddSocial, { IButtonAddSocial } from './button-add-social';

export default {
  title: 'UI/Buttons/ButtonAddSocial',
  component: ButtonAddSocial,
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
    size: {
      type: 'string',
      description: 'Вариант размера кнопки',
      defaultValue: 'standard',
      options: ['small', 'standard'],
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
    social: {
      type: 'string',
      description: 'Иконка социальной сети',
      options: [
        'alisa',
        'facebook',
        'google',
        'insta',
        'mailru',
        'odnoklassniki',
        'telegram',
        'twitter',
        'viber',
        'vk',
        'web',
        'whatsapp',
        'yandex',
        'youtube',
      ],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IButtonAddSocial>;

const Template: StoryFn<IButtonAddSocial> = (args) => (
  <ButtonAddSocial {...args} />
);

export const Button = {
  args: {
    children: 'Facebook',
    social: 'facebook',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};
