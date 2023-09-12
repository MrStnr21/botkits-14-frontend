import type { Meta, StoryObj } from '@storybook/react';
import InputSelect from './input-select';

const meta: Meta<typeof InputSelect> = {
  title: 'COMPONENTS/Fields/InputSelect',
  component: InputSelect,
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

export const InputSelectDefault: Story = {
  args: {
    values: [
      { nameValue: 'выбор 1', value: '1' },
      { nameValue: 'выбор 2', value: '2' },
      { nameValue: 'выбор 3', value: '3' },
    ],
    defaultValue: ['Числа'],
    initValue: ['1'],
    handleFunction: (event) => console.log(event),
  },
};

export const InputSelectMultiple: Story = {
  args: {
    values: [
      { nameValue: 'выбор 1', value: '1' },
      { nameValue: 'выбор 2', value: '2' },
      { nameValue: 'выбор 3', value: '3' },
    ],
    initValue: ['1'],
    defaultValue: ['Числа'],
    handleFunction: (event) => console.log(event),
    multiple: true,
  },
};
