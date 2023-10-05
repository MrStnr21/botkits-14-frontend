import type { Meta, StoryObj } from '@storybook/react';
import InvisibleMessageIcon from './InvisibleMessageIcon';

const meta: Meta<typeof InvisibleMessageIcon> = {
  title: 'Components/Icons/InvisibleMessageIcon',
  component: InvisibleMessageIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconInvisibleMessage: Story = {
  args: {
    width: 20,
    height: 20,
  },
};
