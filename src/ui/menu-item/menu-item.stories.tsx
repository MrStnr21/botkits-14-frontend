import type { Meta, StoryFn } from '@storybook/react';
import MenuItem, { IMenuItem } from './menu-item'; // Import your MenuItem component
import copyIcon from '../../images/icon/24x24/drop down/copy bot.svg';

export default {
  title: 'UI/Menu-Item',
  component: MenuItem,
  argTypes: {
    icon: {
      type: 'boolean',
      description: 'Иконка (если есть)',
      defaultValue: false,
      options: [copyIcon, false],
      control: {
        type: 'radio',
      },
    },
    isChecked: {
      type: 'boolean',
      description: 'Выбран ли item (в режиме множественного выбора)',
      defaultValue: true,
      options: [false, true],
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
  decorators: [
    (storyFn) => (
      <div
        style={{
          width: 264,
          boxShadow: '0px 12px 24px 0px rgba(21, 18, 51, 0.13)',
        }}
      >
        {storyFn()}
      </div>
    ),
  ],
} as Meta<IMenuItem>;

const Template: StoryFn<IMenuItem> = (args) => <MenuItem {...args} />;

export const Item = {
  args: {
    option: {
      value: 'val1',
      label: 'Переменная 1',
    },
    icon: copyIcon,
    // isСhecked: false,
  },
  render: Template,
};
