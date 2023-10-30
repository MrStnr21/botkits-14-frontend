import type { Meta, StoryObj } from '@storybook/react';
import EqualIcon from './Equal';

const meta: Meta<typeof EqualIcon> = {
  title: 'Components/Icons/Equal',
  component: EqualIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Equal: Story = {};
