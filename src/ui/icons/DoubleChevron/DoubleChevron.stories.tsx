import type { Meta, StoryObj } from '@storybook/react';
import DoubleChevronIcon from './DoubleChevron';

const positions = {
  down: 'down',
  up: 'up',
  left: 'left',
  right: 'right',
};

const meta: Meta<typeof DoubleChevronIcon> = {
  title: 'Components/Icons/DoubleChevronIcon',
  component: DoubleChevronIcon,
  argTypes: {
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
export const DoubleChevron: Story = {
  args: {
    color: '#243CBB',
    position: 'left',
    width: 16,
    height: 16,
  },
};
