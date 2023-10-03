import type { Meta, StoryObj } from '@storybook/react';
import PXCircleCloseIcon from './x-circle-close';

const meta: Meta<typeof PXCircleCloseIcon> = {
  title: 'Components/Icons/PXCircleCloseIcon',
  component: PXCircleCloseIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const PXCircleClose: Story = {
  args: {
    color: 'white',
    width: 24,
    height: 24,
  },
};
