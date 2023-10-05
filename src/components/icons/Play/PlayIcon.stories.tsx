import type { Meta, StoryObj } from '@storybook/react';
import PlayIcon from './PlayIcon';

const meta: Meta<typeof PlayIcon> = {
  title: 'Components/Icons/PlayIcon',
  component: PlayIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconPlay: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
