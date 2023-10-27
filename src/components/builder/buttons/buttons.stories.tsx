import type { Meta, StoryFn } from '@storybook/react';
import ButtonS, { IButtonS } from './buttons';

export default {
  title: 'components/builder/blocks/buttons',
  component: ButtonS,
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
} as Meta<IButtonS>;

const Template: StoryFn<IButtonS> = (args) => <ButtonS {...args} />;

export const Start = {
  args: {
    type: 'start',
  },
  render: Template,
};
