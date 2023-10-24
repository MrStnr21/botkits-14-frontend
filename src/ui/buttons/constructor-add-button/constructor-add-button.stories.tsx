import type { Meta, StoryFn } from '@storybook/react';
import ConstructorAddButton, {
  IConstructorAddButton,
  Icons,
} from './constructor-add-button';

export default {
  title: 'UI/Buttons/ConstructorAddButton',
  component: ConstructorAddButton,
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
    icon: {
      type: 'string',
      description: 'Вариант иконки',
      defaultValue: 'add',
      options: Icons,
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
} as Meta<IConstructorAddButton>;

const Template: StoryFn<IConstructorAddButton> = (args) => (
  <ConstructorAddButton {...args} />
);

export const Button = {
  args: {
    children: 'Добавить условие',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};
