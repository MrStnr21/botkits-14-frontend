import type { Meta, StoryFn } from '@storybook/react';
import HelperPanel, { IHelperPanel } from './helper-panel';

export default {
  title: 'COMPONENTS/Builder/other-components/blocks/helper-panel',
  component: HelperPanel,
  argTypes: {
    askButtonHtmlType: {
      type: 'string',
      description: 'Вариант кнопки запроса',
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
    deleteButtonHtmlType: {
      type: 'string',
      description: 'Вариант кнопки удаления',
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
    color: {
      type: 'boolean',
      description: 'Выбор цвета',
      defaultValue: false,
      options: [true, false],
      control: {
        type: 'radio',
      },
    },
    askOnClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике кнопки запроса',
    },
    deleteOnClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике кнопки удаления',
    },
    askIcon: {
      type: 'string',
      description: 'Иконка кнопки запроса',
      options: ['askPhone', 'constructorUrl'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IHelperPanel>;

const Template: StoryFn<IHelperPanel> = (args) => <HelperPanel {...args} />;

export const Button = {
  args: {
    askButtonHtmlType: 'button',
    deleteButtonHtmlType: 'button',
    askIcon: 'askPhone',
  },
  render: Template,
};
