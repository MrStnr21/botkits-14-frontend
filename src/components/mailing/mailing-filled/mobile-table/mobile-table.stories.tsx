import type { Meta, StoryObj } from '@storybook/react';
import { rows } from '../../../../utils/mailingTable';
import MobileTable from './mobile-table';

const meta: Meta<typeof MobileTable> = {
  component: MobileTable,
};

export default meta;

type Story = StoryObj<typeof MobileTable>;

export const Block: Story = {
  render: () => <MobileTable data={rows} />,
};
