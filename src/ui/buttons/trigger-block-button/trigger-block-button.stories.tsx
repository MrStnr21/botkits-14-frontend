import { Meta, StoryFn } from '@storybook/react';
import TriggerButton, { ITriggerButton } from './trigger-block-button';

export default {
  title: 'UI/Buttons/TriggerButton',
  component: TriggerButton,
  argTypes: {
    buttonHtmlType: {
      type: 'string',
      description: 'Вариант кнопки',
      defaultValue: 'button',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
  },
} as Meta<ITriggerButton>;

const Template: StoryFn<ITriggerButton> = (args) => <TriggerButton {...args} />;

export const TriggerButtonDefault = {
  args: {
    buttonHtmlType: 'button',
  },
  render: Template,
};
