import type { StoryObj } from '@storybook/react';
import PageItem from './page-item';

const meta = {
  title: 'UI/Fields/PageItem',
  component: PageItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageItemDefault: Story = {
  args: {
    type: 'default',
    disabled: false,
  },
};

export const PageItemUploadDefault: Story = {
  args: {
    type: 'upload',
    disabled: false,
  },
};

export const PageItemDisabled: Story = {
  args: {
    type: 'default',
    disabled: true,
  },
};
