import type { Meta, StoryObj } from '@storybook/react';
import ButtonStart from './button-start';

const args = {
  data: {
    type: {
      type: 'string',
      description: 'Вариант внешнего вида кнопки',
      defaultValue: 'start',
      options: ['start', 'stop', 'test'],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
  },
};

const meta: Meta<typeof ButtonStart> = {
  component: ButtonStart,
};

export default meta;

type Story = StoryObj<typeof ButtonStart>;

export const Buttonstart: Story = {
  args,
};
