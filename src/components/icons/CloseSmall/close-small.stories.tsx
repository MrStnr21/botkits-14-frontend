import type { Meta, StoryObj } from '@storybook/react';
import CloseSmallIcon from './close-small';

const meta: Meta<typeof CloseSmallIcon> = {
  title: 'Components/Icons/CloseSmallIcon',
  component: CloseSmallIcon,
};

export default meta;

type Story = StoryObj<typeof meta>;
export const CloseSmall: Story = {
  args: {
    color: '#A6B3C9',
    width: 18,
    height: 18,
  },
};
