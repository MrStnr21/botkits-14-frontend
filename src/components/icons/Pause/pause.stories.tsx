import type { Meta, StoryObj } from '@storybook/react';
import PauseIcon from './pause';

const meta: Meta<typeof PauseIcon> = {
  title: 'Components/Icons/PauseIcon',
  component: PauseIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Pause: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
