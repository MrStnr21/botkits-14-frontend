import type { Meta, StoryFn } from '@storybook/react';
import ConstructorDefaultButton, {
  IConstructorDefaultButton,
} from './constructor-default-button';

export default {
  title: 'COMPONENTS/Builder/Buttons/ConstructorDefaultButton',
  component: ConstructorDefaultButton,
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
    isActive: {
      type: 'boolean',
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
} as Meta<IConstructorDefaultButton>;

const Template: StoryFn<IConstructorDefaultButton> = (args) => (
  <ConstructorDefaultButton {...args} />
);

export const Button = {
  args: {
    children: 'Текстом',
    buttonHtmlType: 'button',
    disabled: false,
  },
  render: Template,
};
