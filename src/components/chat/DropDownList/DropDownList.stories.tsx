import type { StoryObj } from '@storybook/react';
import DropDownList from './DropDownList';

const captions = {
  info: 'Информация о пользователе',
  story: 'История действий',
};

const meta = {
  title: 'COMPONENTS/Chat/DropDownList',
  component: DropDownList,
  tags: ['autodocs'],
  argTypes: {
    caption: {
      type: 'string',
      description: 'Выбор заголовка',
      options: Object.keys(captions),
      mapping: captions,
      control: {
        type: 'radio',
        labels: {
          info: 'Информация о пользователе',
          story: 'История действий',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DropDownListDefault: Story = {
  args: {
    caption: 'Информация о пользователе',
  },
};
