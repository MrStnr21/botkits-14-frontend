import type { Meta, StoryObj } from '@storybook/react';
import ImageIcon from './ImageIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof ImageIcon> = {
  title: 'Components/Icons/ImageIcon',
  component: ImageIcon,
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
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconImage: Story = {
  args: {
    color: '#060C23',
    width: 24,
    height: 24,
  },
};
