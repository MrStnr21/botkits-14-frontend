import type { Meta, StoryObj } from '@storybook/react';
import EmojiIcon from './EmojiIcon';

const meta: Meta<typeof EmojiIcon> = {
  title: 'Components/Icons/EmojiIcon',
  component: EmojiIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconEmoji: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
