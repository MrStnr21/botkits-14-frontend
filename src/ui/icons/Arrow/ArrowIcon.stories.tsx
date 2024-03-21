import type { Meta, StoryObj } from '@storybook/react';
import ArrowIcon from './ArrowIcon';

const colors = {
  black: '#060C23',
  white: '#FFFFFF',
};

const positions = {
  down: 'down',
  up: 'up',
  left: 'left',
  right: 'right',
};

const meta: Meta<typeof ArrowIcon> = {
  title: 'UI/Icons/ArrowIcon',
  component: ArrowIcon,
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
    position: {
      type: 'string',
      description: 'Выбор положения',
      options: Object.keys(positions),
      mapping: positions,
      control: {
        type: 'radio',
        labels: {
          down: 'Вниз',
          up: 'Вверх',
          left: 'Влево',
          right: 'Вправо',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconArrow: Story = {
  args: {
    color: '#FFFFFF',
    position: 'up',
    width: 24,
    height: 24,
  },
};
