import type { Meta, StoryObj } from '@storybook/react';
import NewFilterIcon from './NewFilterIcon';

const meta: Meta<typeof NewFilterIcon> = {
  title: 'Components/Icons/ChevronIcon',
  component: NewFilterIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const DoubleChevron: Story = {
  args: {
    color: '#243CBB',
    width: 16,
    height: 16,
  },
};
