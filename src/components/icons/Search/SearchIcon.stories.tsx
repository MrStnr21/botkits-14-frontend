import type { Meta, StoryObj } from '@storybook/react';
import SearchIcon from './SearchIcon';

const meta: Meta<typeof SearchIcon> = {
  title: 'Components/Icons/SearchIcon',
  component: SearchIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconSearchBig: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};

export const IconSearchMedium: Story = {
  args: {
    color: '#A6B3C9',
    width: 20,
    height: 20,
  },
};

export const IconSearchSmall: Story = {
  args: {
    color: '#A6B3C9',
    width: 18,
    height: 18,
  },
};
