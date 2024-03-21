import type { Meta, StoryObj } from '@storybook/react';
import SearchIcon from './SearchIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const meta: Meta<typeof SearchIcon> = {
  title: 'UI/Icons/SearchIcon',
  component: SearchIcon,
  argTypes: {
    size: {
      type: 'string',
      description: 'Выбор размера',
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'radio',
        labels: {
          small: '18х18',
          medium: '20х20',
          large: '24х24',
        },
      },
    },
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

export const IconSearch: Story = {
  args: {
    color: '#A6B3C9',
    size: 'medium',
  },
};
