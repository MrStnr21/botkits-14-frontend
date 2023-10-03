import type { Meta, StoryObj } from '@storybook/react';
import QuickAnswerIcon from './quick-answer';

const meta: Meta<typeof QuickAnswerIcon> = {
  title: 'Components/Icons/QuickAnswerIcon',
  component: QuickAnswerIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const QuickAnswer: Story = {
  args: {
    color: '#A6B3C9',
    width: 20,
    height: 20,
  },
};
