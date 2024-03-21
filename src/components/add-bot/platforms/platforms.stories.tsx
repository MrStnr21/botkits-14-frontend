import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import Platforms, { IPlatforms } from './platforms';
import store from '../../../services/store';

const meta: Meta<IPlatforms> = {
  title: 'COMPONENTS/AddBot/Platforms',
  component: Platforms,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PlatformsDefault: Story = {
  args: {
    onClick: () => console.log(1),
    bot: {
      name: '',
      pages: false,
    },
  },
};

export const PlatformsSelectedFacebook: Story = {
  args: {
    onClick: () => console.log(1),
    bot: {
      name: 'Facebook',
      pages: false,
    },
  },
};
