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
    onChange: () => {},
  },
};

export const InputField: Story = {
  args: {
    value: 'Значение',
    placeholder: 'Введите ключ доступа',
    disabled: false,
    isInvalid: false,
    errorMessage: 'Вы ввели неправильное значение',
    onChange: () => {},
  },
};

export const InputDisabled: Story = {
  args: {
    value: 'Значение',
    placeholder: 'Введите ключ доступа',
    disabled: true,
    isInvalid: false,
    errorMessage: 'Вы ввели неправильное значение',
    onChange: () => {},
  },
};

export const InputError: Story = {
  args: {
    value: '',
    placeholder: 'Введите ключ доступа',
    disabled: false,
    isInvalid: true,
    errorMessage: 'Вы ввели неправильное значение',
    onChange: () => {},
  },
};

export const InputBuilderDefaut: Story = {
  args: {
    placeholder: 'Введите название',
    disabled: false,
    minLength: 0,
    styled: 'bot-builder-default',
    onChange: () => {},
  },
};

export const InputBuilderNumeric: Story = {
  args: {
    type: 'number',
    placeholder: '0',
    disabled: false,
    minLength: 0,
    styled: 'bot-builder-num',
    onChange: () => {},
  },
};
