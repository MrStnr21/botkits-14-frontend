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
    defaultValue: ['1'],
    maxWidth: 240,
    handleFunction: (payload) => console.log(payload),
  },
};

export const InputSelectMultiple: Story = {
  args: {
    values: [
      { nameValue: 'выбор 1', value: '1' },
      { nameValue: 'выбор 2', value: '2' },
      { nameValue: 'выбор 3', value: '3' },
    ],
    defaultValue: ['1'],
    maxWidth: 240,
    handleFunction: (payload) => console.log(payload),
    multiple: true,
  },
};
