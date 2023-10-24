import type { Meta, StoryObj } from '@storybook/react';
import DoneIcon from './Done';

const sizes = {
  '16px': 16,
  '20px': 20,
  '24px': 24,
};

const meta: Meta<typeof DoneIcon> = {
  title: 'Components/Icons/DoneIcon',
  component: DoneIcon,
  argTypes: {
    size: {
      type: 'string',
      description: 'Выбор размера',
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DoneDefault: Story = {
  args: {
    color: '#A6B3C9',
    size: 16,
  },
};
