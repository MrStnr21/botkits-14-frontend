/* eslint-disable import/no-extraneous-dependencies */
import { withRouter } from 'storybook-addon-react-router-v6';
import Sidebar from './sidebar';

export default {
  title: 'Components/Sidebar',
  render: () => <Sidebar />,
  decorators: [withRouter],
};

export const Default = () => <Sidebar />;
