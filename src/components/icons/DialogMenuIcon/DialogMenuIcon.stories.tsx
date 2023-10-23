import type { Meta, StoryObj } from '@storybook/react';
import DialogMenuIcon from './DialogMenuIcon';

const meta: Meta<typeof DialogMenuIcon> = {
  title: 'Components/Icons/DialogMenuIcon',
  component: DialogMenuIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconDialogMenu: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
