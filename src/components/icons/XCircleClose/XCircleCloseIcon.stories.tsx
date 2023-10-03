import type { Meta, StoryObj } from '@storybook/react';
import XCircleCloseIcon from './XCircleCloseIcon';

const meta: Meta<typeof XCircleCloseIcon> = {
  title: 'Components/Icons/XCircleCloseIcon',
  component: XCircleCloseIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const XCircleClose: Story = {
  args: {
    color: 'white',
    width: 24,
    height: 24,
  },
};
