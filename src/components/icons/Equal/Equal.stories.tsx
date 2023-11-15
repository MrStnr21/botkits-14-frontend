import type { Meta, StoryObj } from '@storybook/react';
import EqualIcon from './Equal';

const sizes = {
  small: 14,
  big: 24,
};

const meta: Meta<typeof EqualIcon> = {
  title: 'Components/Icons/Equal',
  component: EqualIcon,
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

export const EqualSmall: Story = {
  args: {
    size: 14,
  },
};

export const EqualBig: Story = {
  args: {
    size: 24,
  },
};
