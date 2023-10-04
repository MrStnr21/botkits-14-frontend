import type { StoryObj } from '@storybook/react';
import SearchFilters from './SearchFilters';

const meta = {
  title: 'COMPONENTS/SearchFilters',
  component: SearchFilters,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchFiltersDefault: Story = {};
