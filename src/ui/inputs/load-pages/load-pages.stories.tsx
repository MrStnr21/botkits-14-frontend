import type { StoryObj } from '@storybook/react';
import LoadPages from './load-pages';

const meta = {
  title: 'UI/Fields/LoadPages',
  component: LoadPages,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadPagesDefault: Story = {
  args: {
    arr: [],
    disabled: false,
  },
};

export const LoadPagesWithItem: Story = {
  args: {
    arr: ['Пример1', 'Пример2'],
    disabled: false,
  },
};

export const LoadPagesWithSevenItem: Story = {
  args: {
    arr: ['Пример1', 'Пример2', 'Пример1', 'Пример2', 'Пример1', 'Пример2'],
    disabled: false,
  },
};

export const LoadPagesDisabled: Story = {
  args: {
    arr: [],
    disabled: true,
  },
};
