import type { Meta, StoryObj } from '@storybook/react';
import AddIcon from './AddIcon';

const colors = {
  black: '#060C23',
  grey: '#8392AB',
};

const positions = {
  folded: 'folded',
  unfolded: 'unfolded',
};

const meta: Meta<typeof AddIcon> = {
  title: 'UI/Icons/AddIcon',
  component: AddIcon,
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
    position: {
      type: 'string',
      description: 'Выбор положения',
      options: Object.keys(positions),
      mapping: positions,
      control: {
        type: 'radio',
        labels: {
          folded: 'folded',
          unfolded: 'unfolded',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconAdd: Story = {
  args: {
    color: '#8392AB',
    position: 'folded',
    width: 36,
    height: 36,
  },
};
