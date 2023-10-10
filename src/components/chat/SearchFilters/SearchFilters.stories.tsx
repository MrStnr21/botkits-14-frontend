import type { StoryObj } from '@storybook/react';
import SearchFilters from './SearchFilters';

const meta = {
  title: 'COMPONENTS/Chat/SearchFilters',
  component: SearchFilters,
  tags: ['autodocs'],
  argTypes: {
    active: {
      type: 'boolean',
      description: 'Открыто ли меню',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchFiltersDefault: Story = {
  args: {
    active: true,
  },
};
