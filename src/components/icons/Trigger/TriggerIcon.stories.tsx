import type { Meta, StoryObj } from '@storybook/react';
import TriggerIcon from './TriggerIcon';

const meta: Meta<typeof TriggerIcon> = {
  title: 'Components/Icons/TriggerIcon',
  component: TriggerIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Trigger: Story = {
  args: {
    color: '#060C23',
    width: 26,
    height: 24,
  },
};
