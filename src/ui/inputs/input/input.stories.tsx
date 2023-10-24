import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const styled = ['main', 'secondary', 'bot-builder-default', 'bot-builder-num'];

const meta: Meta<typeof Input> = {
  title: 'UI/Fields/Input',
  component: Input,
  argTypes: {
    value: {
      type: 'string',
      description: 'value',
    },
    placeholder: {
      type: 'string',
      description: 'placeholder',
    },
    errorMessage: {
      type: 'string',
      description: 'сообщение об ошибке',
    },
    disabled: {
      type: 'boolean',
      discription: 'disabled',
      options: [true, false],
    },
    isInvalid: {
      type: 'boolean',
      discription: 'disabled',
      options: [true, false],
    },
    minLength: {
      type: 'number',
      description: 'минимальная длина',
    },
    maxLength: {
      type: 'number',
      description: 'максимальная длина',
    },
    styled: {
      type: 'string',
      description: 'стиль',
      options: styled,
      control: {
        type: 'radio',
        labels: styled,
      },
    },
    textColor: {
      type: 'string',
      description: 'цвет текста',
      options: ['default', 'blue'],
      control: {
        type: 'radio',
        lables: ['default', 'blue'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    value: '',
    placeholder: 'Введите ключ доступа',
    disabled: false,
    isInvalid: false,
    styled: 'main',
    errorMessage: 'Вы ввели неправильное значение',
    onChange: () => {},
  },
};
