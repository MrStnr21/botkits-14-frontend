import type { Meta, StoryObj } from '@storybook/react';
import MusicIcon from './MusicIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof MusicIcon> = {
  title: 'Components/Icons/MusicIcon',
  component: MusicIcon,
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

export const IconMusic: Story = {
  args: {
    color: '#060C23',
    width: 24,
    height: 24,
  },
};
