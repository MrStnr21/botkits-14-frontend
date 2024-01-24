import type { StoryObj } from '@storybook/react';
import Platforms from './platforms';

const meta = {
  title: 'COMPONENTS/Platforms/Platforms',
  component: Platforms,
  tags: ['autodocs'],
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
