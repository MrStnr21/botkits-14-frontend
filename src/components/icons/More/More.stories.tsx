import type { Meta, StoryObj } from '@storybook/react';
import MoreIcon from './More';

const meta: Meta<typeof MoreIcon> = {
  title: 'Components/Icons/More',
  component: MoreIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const More: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
