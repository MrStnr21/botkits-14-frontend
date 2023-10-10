import type { Meta, StoryObj } from '@storybook/react';
import ImportIcon from './ImportIcon';

const colors = {
  black: '#060C23',
  blue: '#243CBB',
  while: '#FFFFFF',
};

const meta: Meta<typeof ImportIcon> = {
  title: 'Components/Icons/ImportIcon',
  component: ImportIcon,
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
          blue: 'Cиний',
          white: 'Белый',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const IconImport: Story = {
  args: {
    color: '#060C23',
    width: 24,
    height: 24,
  },
};
