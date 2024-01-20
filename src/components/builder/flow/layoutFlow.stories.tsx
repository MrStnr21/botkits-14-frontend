import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'storybook-addon-react-router-v6';
import LayoutFlow from './layoutFlow';
import store from '../../../services/store';

const meta: Meta<typeof LayoutFlow> = {
  title: 'COMPONENTS/Builder',
  component: LayoutFlow,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof LayoutFlow>;

export const Layout: Story = {
  render: () => (
    <Provider store={store}>
      <LayoutFlow />
    </Provider>
  ),
};
