import type { StoryObj } from '@storybook/react';
import InputMessage from './input-message';

const meta = {
  title: 'UI/Fields/InputMessage',
  component: InputMessage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputMessageDefault: Story = {};
