import type { Meta, StoryObj } from '@storybook/react';
import EditIcon from './Edit';

const sizes = {
  '16px': 16,
  '20px': 20,
  '24px': 24,
};

const meta: Meta<typeof EditIcon> = {
  title: 'Components/Icons/EditIcon',
  component: EditIcon,
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
    color: '#243CBB',
    size: 16,
  },
};
