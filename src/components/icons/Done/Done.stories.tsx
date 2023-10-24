import type { Meta, StoryObj } from '@storybook/react';
import DoneIcon from './Done';

const sizes = {
  '16px': 16,
  '20px': 20,
};

const meta: Meta<typeof DoneIcon> = {
  title: 'Components/Icons/DoneIcon',
  component: DoneIcon,
  argTypes: {
    width: {
      type: 'number',
      description: 'выбор ширины',
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'radio',
        labels: {
          small: '16х16',
          large: '20х20',
        },
      },
    },
    height: {
      type: 'number',
      description: 'выбор высоты',
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'radio',
        labels: {
          small: '16х16',
          large: '20х20',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DoneDefault: Story = {
  args: {
    color: '#A6B3C9',
    width: 16,
    height: 16,
  },
};
