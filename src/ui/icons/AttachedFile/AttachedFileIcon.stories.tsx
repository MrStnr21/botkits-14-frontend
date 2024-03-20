import type { Meta, StoryObj } from '@storybook/react';
import AttachedFileIcon from './AttachedFileIcon';

const meta: Meta<typeof AttachedFileIcon> = {
  title: 'UI/Icons/AttachedFileIcon',
  component: AttachedFileIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconAttachedFile: Story = {
  args: {
    width: 47,
    height: 47,
  },
};
