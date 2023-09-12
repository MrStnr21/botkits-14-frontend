import type { Meta, StoryFn } from '@storybook/react';
import ButtonInstruction, { IButtonInstruction } from './button-instruction';

export default {
  title: 'UI/Buttons/Button-Instruction',
  component: ButtonInstruction,
  argTypes: {
    hover: {
      description: 'Изменение кнопки при наведении',
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
    url: {
      type: 'string',
      description: 'Ввежите url, на который будет ссылаться кнопка',
    },
    onClick: {
      action: 'clicked',
      description: 'Переход на url с инструкцией',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IButtonInstruction>;

/* prettier-ignore */
const Template: StoryFn<IButtonInstruction> = (args) => <ButtonInstruction {...args} />;

export const Button = {
  args: {
    disabled: false,
    url: '',
  },
  render: Template,
};
