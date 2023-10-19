import type { Meta, StoryObj } from '@storybook/react';
import PaperClipIcon from './PaperClipIcon';

const colors = {
  black: '#060C23',
  grey: '#A6B3C9',
};

const meta: Meta<typeof PaperClipIcon> = {
  title: 'Components/Icons/PaperClipIcon',
  component: PaperClipIcon,
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

export const IconPaperClip: Story = {
  args: {
    color: '#A6B3C9',
    width: 24,
    height: 24,
  },
};
