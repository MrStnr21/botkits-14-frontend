import type { Meta, StoryObj } from '@storybook/react';
import TrashIcon from './TrashIcon';

const colors = {
  gray: '#A6B3C9',
  black: '#060C23',
};

const meta: Meta<typeof TrashIcon> = {
  title: 'UI/Icons/TrashIcon',
  component: TrashIcon,
  argTypes: {
    color: {
      type: 'string',
      description: 'Выбор цвета',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          gray: 'Серый',
          black: 'Черный',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconTrash: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
