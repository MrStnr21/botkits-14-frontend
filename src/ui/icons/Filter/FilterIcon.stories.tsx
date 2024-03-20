import type { Meta, StoryObj } from '@storybook/react';
import FilterIcon from './FilterIcon';

const meta: Meta<typeof FilterIcon> = {
  title: 'Components/Icons/FilterIcon',
  component: FilterIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconFilter: Story = {
  args: {
    color: '#060C23',
    width: 20,
    height: 20,
  },
};
