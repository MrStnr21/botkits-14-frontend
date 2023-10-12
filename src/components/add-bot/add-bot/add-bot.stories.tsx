import type { StoryObj } from '@storybook/react';
import AddBot from './add-bot';

const meta = {
  title: 'COMPONENTS/AddBot/AddBot',
  component: AddBot,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AddBotDefault: Story = {
  args: {
    onClick: () => console.log(1),
    bot: {
      name: '',
      stepFirst: 'default',
    },
  },
};

export const AddBotSelectedFacebook: Story = {
  args: {
    onClick: () => console.log(1),
    bot: {
      name: 'Facebook',
      stepFirst: 'default',
    },
  },
};
