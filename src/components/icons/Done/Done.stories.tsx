import type { Meta, StoryObj } from '@storybook/react';
import DoneIcon from './Done';

const meta: Meta<typeof DoneIcon> = {
  title: 'Components/Icons/DoneIcon',
  component: DoneIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DoneDefault: Story = {
  args: {
    color: '#A6B3C9',
    width: 16,
    height: 16,
  },
};

export const DoneBig: Story = {
  args: {
    color: '#A6B3C9',
    width: 20,
    height: 20,
  },
};
