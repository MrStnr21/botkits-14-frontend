import type { Meta, StoryObj } from '@storybook/react';
import HorizontalIcon from './HorizontalIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof HorizontalIcon> = {
  title: 'Components/Icons/HorizontalIcon',
  component: HorizontalIcon,
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

export const IconHorizontal: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
