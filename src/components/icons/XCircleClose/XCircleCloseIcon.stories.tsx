import type { Meta, StoryObj } from '@storybook/react';
import XCircleCloseIcon from './XCircleCloseIcon';

const colors = {
  black: '#060C23',
  white: '#FFFFFF',
};

const meta: Meta<typeof XCircleCloseIcon> = {
  title: 'Components/Icons/XCircleCloseIcon',
  component: XCircleCloseIcon,
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
          white: 'Белый',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const XCircleClose: Story = {
  args: {
    color: '#FFFFFF',
    width: 24,
    height: 24,
  },
};
