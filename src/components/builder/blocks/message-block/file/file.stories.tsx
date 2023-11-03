import type { Meta, StoryObj } from '@storybook/react';
import File from './file';
import ControlLayout from '../../../control-layout/control-layout';

const meta: Meta<typeof File> = {
  component: File,
};

export default meta;

type Story = StoryObj<typeof File>;

export const Block: Story = {
  render: () => (
    <ControlLayout name="test" type="test" nameSetter={() => {}}>
      <File />
    </ControlLayout>
  ),
};
