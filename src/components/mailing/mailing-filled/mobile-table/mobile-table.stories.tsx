import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { rows } from '../../../../utils/mailingTable';
import MobileTable from './mobile-table';

const meta: Meta<typeof MobileTable> = {
  title: 'Components/Mailing/Mobile Table',
  component: MobileTable,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MobileTable>;

export const Block: Story = {
  render: () => <MobileTable data={rows} />,
};
