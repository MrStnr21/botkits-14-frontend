import type { Meta, StoryFn } from '@storybook/react';
import ButtonStart, { TButtonStartProps } from './button-start';

export default {
  title: 'components/builder/blocks/buttons',
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
