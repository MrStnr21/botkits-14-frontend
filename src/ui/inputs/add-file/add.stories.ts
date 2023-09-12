import type { StoryObj } from '@storybook/react';
import DownloadFile from './add-file';
import { SIZE_INPUT } from '../../../utils/constants';

const meta = {
  title: 'COMPONENTS/Fields/DownloadFile',
  component: DownloadFile,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DownloadFileL: Story = {
  args: {
    size: SIZE_INPUT.L,
    state: true,
  },
};

export const DownloadFileM: Story = {
  args: {
    size: SIZE_INPUT.M,
  },
};

export const DownloadFileS: Story = {
  args: {
    size: SIZE_INPUT.S,
  },
};
