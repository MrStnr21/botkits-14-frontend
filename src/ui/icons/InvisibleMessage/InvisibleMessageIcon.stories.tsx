import type { Meta, StoryObj } from '@storybook/react';
import InvisibleMessageIcon from './InvisibleMessageIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof InvisibleMessageIcon> = {
  title: 'UI/Icons/InvisibleMessageIcon',
  component: InvisibleMessageIcon,
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

export const IconInvisibleMessage: Story = {
  args: {
    color: '#A6B3C9',
    width: 20,
    height: 20,
  },
};
