import type { Meta, StoryObj } from '@storybook/react';
import CloseIcon from './CloseIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof CloseIcon> = {
  title: 'Components/Icons/CloseIcon',
  component: CloseIcon,
  argTypes: {
    color: {
      type: 'string',
      description: 'Выбор цвета',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          black: 'Черный',
          grey: 'Серый',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CloseDefault: Story = {
  args: {
    color: '#060C23',
    width: 24,
    height: 24,
  },
};

export const CloseSmall: Story = {
  args: {
    color: '#A6B3C9',
    width: 18,
    height: 18,
  },
};
