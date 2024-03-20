import type { Meta, StoryFn } from '@storybook/react';
import Menu, { IMenu } from './menu';

const options = [
  { label: 'Переменная 1', value: 'val1' },
  { label: 'Переменная 2', value: 'val2' },
  { label: 'Переменная 3', value: 'val3' },
  { label: 'Переменная 4', value: 'val4' },
];

const selectedValuesCurr = ['val1', 'val3'];

export default {
  title: 'UI/Menu Basic',
  component: Menu,
  argTypes: {
    options: {
      description: 'Элементы меню',
    },
    layoutClassName: {
      type: 'string',
      description: 'className для контейнера - позиционирование, размер',
    },
    onItemClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике на элемент меню',
    },
    size: {
      type: 'string',
      description: 'Размер меню',
      defaultValue: 'default',
      options: ['small', 'medium', 'default', 'large', 'chat'],
      control: {
        type: 'radio',
      },
    },
    isScroll: {
      type: 'boolean',
      description: 'Есть ли скроллбар',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    isMultiple: {
      type: 'boolean',
      description: 'Можно ли выбрать несколько вариантов',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    selectedItems: {
      type: 'boolean',
      description: 'Выбранные элементы',
      defaultValue: [],
    },
    onClick: { action: 'onClick' },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IMenu>;

const Template: StoryFn<IMenu> = (args) => <Menu {...args} />;

export const MenuBasic = {
  args: { options, size: 'default', isMultiple: false },
  render: Template,
};

export const MenuMultiselect = {
  args: {
    options,
    size: 'default',
    isMultiple: true,
    selectedValues: selectedValuesCurr,
  },
  render: Template,
};
