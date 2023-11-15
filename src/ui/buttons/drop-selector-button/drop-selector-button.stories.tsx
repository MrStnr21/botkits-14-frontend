import type { Meta, StoryFn } from '@storybook/react';
import DropSelectorButton, {
  IDropSelectorButton,
} from './drop-selector-button';
import calendarIcon from '../../../images/icon/16x16/common/calendar.svg';

const icons = {
  calendarIcon,
};

export default {
  title: 'UI/Buttons/DropSelectorButton',
  component: DropSelectorButton,
  argTypes: {
    disabled: {
      type: 'boolean',
      description: 'Вариант активности кнопки',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    buttonHtmlType: {
      type: 'string',
      description: 'Вариант кнопки',
      defaultValue: 'button',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
    },
    icon: {
      type: 'string',
      description: 'Изображение на кнопке',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: { calendarIcon: 'календарь' },
        default: calendarIcon,
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
} as Meta<IDropSelectorButton>;

const Template: StoryFn<IDropSelectorButton> = (args) => (
  <DropSelectorButton {...args} />
);

export const DropSelectorBtn = {
  args: {
    buttonHtmlType: 'button',
    disabled: false,
    icon: calendarIcon,
  },
  render: Template,
};
