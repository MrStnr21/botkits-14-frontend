import type { StoryObj } from '@storybook/react';
import DropDownList from './DropDownList';

const captions = {
  info: 'Информация о пользователе',
  story: 'История действий',
};

const positions = {
  down: 'down',
  up: 'up',
};

const meta = {
  title: 'COMPONENTS/DropDownList',
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
    position: {
      type: 'string',
      description: 'Выбор положения шеврона',
      options: Object.keys(positions),
      mapping: positions,
      control: {
        type: 'radio',
        labels: {
          down: 'Вниз',
          up: 'Вверх',
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
    position: 'down',
  },
};
