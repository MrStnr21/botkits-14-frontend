import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import FilesField from './files-field';
import ControlLayout from '../../../control-layout/control-layout';

const meta: Meta<typeof FilesField> = {
  title: 'COMPONENTS/Builder/other-components/blocks/message-block/files-field',
  component: FilesField,
};

export default meta;

type Story = StoryObj<typeof FilesField>;

export const Block: Story = {
  render: () => (
    <ReactFlowProvider>
      <ControlLayout type="test">
        <FilesField />
      </ControlLayout>
    </ReactFlowProvider>
  ),
};
