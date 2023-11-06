import type { Meta, StoryObj } from '@storybook/react';

import Message from './message';

const meta: Meta<typeof Message> = {
  component: Message,
};

export default meta;
type Story = StoryObj<typeof Message>;

export const OutgoingMessage: Story = {
  render: () => <Message type="outgoing" message="Ну что такое ?! :)" />,
};

export const IcomingMessage: Story = {
  render: () => <Message type="incoming" name="Юлия" message="Чегоо? :Р" />,
};
