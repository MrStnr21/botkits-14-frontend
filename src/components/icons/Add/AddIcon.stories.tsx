import type { Meta, StoryObj } from '@storybook/react';
import AddIcon from './AddIcon';

const colors = {
  black: '#060C23',
  grey: '#8392AB',
};

const meta: Meta<typeof AddIcon> = {
  title: 'Components/Icons/AddIcon',
  component: AddIcon,
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

export const IconAdd: Story = {
  args: {
    color: '#8392AB',
    width: 36,
    height: 36,
  },
};
