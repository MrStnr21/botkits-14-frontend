import type { StoryObj } from '@storybook/react';
import UploadedFiles from './uploaded-files';

const meta = {
  title: 'COMPONENTS/UploadedFiles',
  component: UploadedFiles,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const UploadedFilesDefault: Story = {
  args: {
    file_name: 'File',
    file_extension: 'pdf',
  },
};
