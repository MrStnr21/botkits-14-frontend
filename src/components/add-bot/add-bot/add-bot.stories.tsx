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
      pages: false,
    },
  },
};

export const AddBotSelectedFacebook: Story = {
  args: {
    onClick: () => console.log(1),
    bot: {
      name: 'Facebook',
      pages: false,
    },
  },
};
