import type { Meta, StoryObj } from '@storybook/react';

import SendButton from './send-button';

const meta: Meta<typeof SendButton> = {
  component: SendButton,
};

export default meta;
type Story = StoryObj<typeof SendButton>;

export const SButton: Story = {
  render: () => <SendButton onClick={() => {}} />,
};
