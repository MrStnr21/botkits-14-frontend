import type { Meta, StoryObj } from '@storybook/react';
import ChevronIcon from './chevron';

const meta: Meta<typeof ChevronIcon> = {
  title: 'Components/Icons/ChevronIcon',
  component: ChevronIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Chevron: Story = {
  args: {
    color: '#060C23',
    width: 16,
    height: 16,
  },
};
