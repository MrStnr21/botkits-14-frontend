import type { Meta, StoryObj } from '@storybook/react';
import ApiBlockNode from './api';

const data = {
  name: 'Api block',
};

const meta: Meta<typeof ApiBlockNode> = {
  component: ApiBlockNode,
};

export default meta;

type Story = StoryObj<typeof ApiBlockNode>;

export const ApiBlock: Story = {
  args: {
    data,
  },
};
