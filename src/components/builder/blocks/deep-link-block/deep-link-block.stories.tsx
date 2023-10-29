import type { Meta, StoryObj } from '@storybook/react';
import DeepLink from './deep-link-block';

const meta: Meta<typeof DeepLink> = {
  component: DeepLink,
};

export default meta;

type Story = StoryObj<typeof DeepLink>;

export const Block: Story = {};
