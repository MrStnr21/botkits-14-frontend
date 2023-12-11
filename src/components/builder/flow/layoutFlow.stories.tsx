import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'storybook-addon-react-router-v6';
import LayoutFlow from './layoutFlow';
import store from '../../../services/store';

export default {
  title: 'COMPONENTS/Builder/layoutFlow',
  component: LayoutFlow,
  decorators: [withRouter],
};

export const Default = () => (
  <Provider store={store}>
    <LayoutFlow />
  </Provider>
);
