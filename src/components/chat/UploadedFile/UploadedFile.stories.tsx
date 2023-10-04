import type { StoryObj } from '@storybook/react';
import UploadedFile from './UploadedFile';

const meta = {
  title: 'COMPONENTS/UploadedFile',
  component: UploadedFile,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UploadedFileDefault: Story = {
  args: {
    file_name: 'File',
    file_extension: 'pdf',
  },
};
