import type { Meta, StoryFn } from '@storybook/react';
import MenuTextEditor, { IMenuTextEditor } from './menu-text-editor';

export default {
  title: 'UI/Menus/Menu-Text-Editor',
  component: MenuTextEditor,
  argTypes: {
    top: {
      type: 'number',
      description: 'Абсолютный отступ сверху',
      defaultValue: 0,
    },
    left: {
      type: 'number',
      description: 'Абсолютный отступ слева',
      defaultValue: 0,
    },
    isActive: {
      type: 'boolean',
      description: 'Открыто ли меню',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenuTextEditor>;

/* prettier-ignore */
const Template: StoryFn<IMenuTextEditor> = (args) => <MenuTextEditor {...args} />;

export const menuTextEditor = {
  args: { isActive: true },
  render: Template,
};
