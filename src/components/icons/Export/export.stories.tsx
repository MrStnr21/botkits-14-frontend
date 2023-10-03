import type { Meta, StoryObj } from '@storybook/react';
import ExportIcon from './export-icon';

const meta: Meta<typeof ExportIcon> = {
  title: 'Components/Icons/ExportIcon',
  component: ExportIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const IconExport: Story = {
  args: {
    color: '#243CBB',
    width: 50,
    height: 50,
  },
};
