import type { Meta, StoryFn } from '@storybook/react';
import ButtonStart, { TButtonStartProps } from './button-start';

export default {
  title: 'components/builder/blocks/button-start',
  component: ButtonStart,
  argTypes: {
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
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<TButtonStartProps>;

const Template: StoryFn<TButtonStartProps> = (args) => (
  <ButtonStart {...args} />
);

export const Start = {
  args: {
    type: 'start',
  },
  render: Template,
};
/*
const args = {
  data: {
    type: 'start' || 'stop' || 'test',
  },
};

const meta: Meta<typeof ButtonStart> = {
  component: ButtonStart,
};

export default meta;

type Story = StoryObj<typeof ButtonStart>;

export const Block: Story = {
  args,
}; */

/* export default {
  title: 'components/builder/blocks/button-start',
  component: ButtonStart,
  argTypes: {
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
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<TButtonStartProps>;

const Template: StoryFn<TButtonStartProps> = (args) => (
  <ButtonStart {...args} />
);

export const Start = {
  args: {
    type: 'start',
  },
  render: Template,
}; */
