import type { Meta, StoryObj } from '@storybook/react';
import ImportIcon from './import-icon';

const meta: Meta<typeof ImportIcon> = {
  title: 'Components/Icons/ImportIcon',
  component: ImportIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const IconImport: Story = {
  args: {
    color: '#060C23',
    width: 24,
    height: 24,
  },
};
