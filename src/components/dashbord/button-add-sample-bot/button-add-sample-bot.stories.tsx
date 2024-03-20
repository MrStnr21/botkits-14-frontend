import type { Meta, StoryFn } from '@storybook/react';
import ButtonAddSampleBot, {
  IButtonAddSampleBot,
} from './button-add-sample-bot';
import AnsweringMachineIcon from '../../../images/icon/template/answering machine.svg';

export default {
  title: 'Components/Dashboard/Button Add Sample Bot',
  component: ButtonAddSampleBot,
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
    icon: {
      type: 'string',
      description: 'Иконка кнопки',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IButtonAddSampleBot>;

const Template: StoryFn<IButtonAddSampleBot> = (args) => (
  <ButtonAddSampleBot {...args} />
);

export const Button = {
  args: {
    children: 'Добавить бота',
    buttonHtmlType: 'button',
    disabled: false,
    icon: AnsweringMachineIcon,
  },
  render: Template,
};
