import type { Meta, StoryObj } from '@storybook/react';
import ChevronIcon from './ChevronIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
  while: '#FFFFFF',
};

const positions = {
  down: 'down',
  up: 'up',
  left: 'left',
  right: 'right',
};

const meta: Meta<typeof ChevronIcon> = {
  title: 'Components/Icons/ChevronIcon',
  component: ChevronIcon,
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
          white: 'Белый>',
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
export const Chevron: Story = {
  args: {
    color: '#060C23',
    position: 'left',
    width: 16,
    height: 16,
  },
};
