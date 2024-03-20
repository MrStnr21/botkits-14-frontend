import type { Meta, StoryObj } from '@storybook/react';
import QuickAnswerIcon from './QuickAnswerIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof QuickAnswerIcon> = {
  title: 'Components/Icons/QuickAnswerIcon',
  component: QuickAnswerIcon,
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
export const QuickAnswer: Story = {
  args: {
    color: '#A6B3C9',
    width: 20,
    height: 20,
  },
};
