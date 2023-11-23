import { Provider } from 'react-redux';
import LayoutFlow from './layoutFlow';
import store from '../../../services/store';

export default {
  title: 'COMPONENTS/Builder/layoutFlow',
  component: LayoutFlow,
};

export const Default = () => (
  <Provider store={store}>
    <LayoutFlow />
  </Provider>
);
