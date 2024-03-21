import type { Meta, StoryObj } from '@storybook/react';
import BotIcon from './BotIcon';

const meta: Meta<typeof BotIcon> = {
  title: 'UI/Icons/BotIcon',
  component: BotIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconBot: Story = {
  args: {
    width: 18,
    height: 18,
  },
};
