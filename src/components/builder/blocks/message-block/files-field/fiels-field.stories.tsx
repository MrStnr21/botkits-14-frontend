import type { Meta, StoryObj } from '@storybook/react';
import FielsField from './fiels-field';
import ControlLayout from '../../../control-layout/control-layout';

const meta: Meta<typeof FielsField> = {
  component: FielsField,
};

export default meta;

type Story = StoryObj<typeof FielsField>;

export const Block: Story = {
  render: () => (
    <ControlLayout name="test" type="test" nameSetter={() => {}}>
      <FielsField />
    </ControlLayout>
  ),
};
