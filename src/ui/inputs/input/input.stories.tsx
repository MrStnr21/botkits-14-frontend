import type { StoryObj } from '@storybook/react';
import Input from './input';

const meta = {
  title: 'UI/Fields/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
    value: '',
    placeholder: 'Введите ключ доступа',
    disabled: false,
    isInvalid: false,
    errorMessage: 'Вы ввели неправильное значение',
  },
};

export const InputField: Story = {
  args: {
    value: 'Значение',
    placeholder: 'Введите ключ доступа',
    disabled: false,
    isInvalid: false,
    errorMessage: 'Вы ввели неправильное значение',
  },
};

export const InputDisabled: Story = {
  args: {
    value: 'Значение',
    placeholder: 'Введите ключ доступа',
    disabled: true,
    isInvalid: false,
    errorMessage: 'Вы ввели неправильное значение',
  },
};

export const InputError: Story = {
  args: {
    value: '',
    placeholder: 'Введите ключ доступа',
    disabled: false,
    isInvalid: true,
    errorMessage: 'Вы ввели неправильное значение',
  },
};
