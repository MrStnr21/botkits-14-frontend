import type { Meta, StoryObj } from '@storybook/react';
import PaperClipIcon from './PaperClipIcon';

const meta: Meta<typeof PaperClipIcon> = {
  title: 'Components/Icons/PaperClipIcon',
  component: PaperClipIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconPaperClip: Story = {
  args: {
    color: '#060C23',
    width: 24,
    height: 24,
  },
};
