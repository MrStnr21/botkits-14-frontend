import type { Meta, StoryObj } from '@storybook/react';
import BtnIcon from './BtnIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof BtnIcon> = {
  title: 'Components/Icons/BtnIcon',
  component: BtnIcon,
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

export const IconBtn: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 16,
  },
};
