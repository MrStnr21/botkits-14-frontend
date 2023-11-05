import type { Meta, StoryObj } from '@storybook/react';
import VariableBlockNode from './variable';

const meta: Meta<typeof VariableBlockNode> = {
  component: VariableBlockNode,
};

export default meta;

type Story = StoryObj<typeof VariableBlockNode>;

export const ApiBlock: Story = {};
