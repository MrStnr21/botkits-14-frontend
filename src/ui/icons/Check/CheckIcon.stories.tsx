import type { Meta, StoryObj } from '@storybook/react';
import CheckIcon from './CheckIcon';

const colors = {
  blue: '#243CBB',
  grey: '#A6B3C9',
  green: '#00E98F',
};

const meta: Meta<typeof CheckIcon> = {
  title: 'Components/Icons/CheckIcon',
  component: CheckIcon,
  argTypes: {
    color: {
      type: 'string',
      description: 'Выбор цвета',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          blue: 'Синий',
          grey: 'Серый',
          green: 'Зеленый',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Check: Story = {
  args: {
    color: '#243CBB',
    width: 18,
    height: 18,
  },
};
