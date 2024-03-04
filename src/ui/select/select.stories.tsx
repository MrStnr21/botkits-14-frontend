import type { Meta, StoryFn } from '@storybook/react';
import Select from './select';
import { Option } from '../../utils/types';

const options = [
  { label: 'Переменная 1', value: 'val1' },
  { label: 'Переменная 2', value: 'val2' },
  { label: 'Переменная 3', value: 'val3' },
  { label: 'Переменная 4', value: 'val4' },
];

let currentOption = options[0];

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  argTypes: {
    currentOption: {
      type: Option as unknown as 'string',
      description:
        'текущая выбранная опция. Принимает объект Option или string',
    },
    options: {
      description:
        'Набор полей меню, массив объектов формата **{label: string; value: string; icon?: string;}**',
    },
    handleSelect: {
      description:
        'callback при клике на элемент select <br/> **(option: Option) => void**',
    },
    placeholder: {
      description: 'Отображаемый текст при отсутствии выбранной опции',
    },
    buttonStyle: {
      description: 'style-аттрибут для select',
    },
    elementToCloseListener: {
      options: ['document', 'flow'],
      control: { type: 'radio' },
      description:
        'Клик на какой элемент вызывает закрытия select, добавлен из-за особенностей ReactFlow',
    },
    adaptive: {
      type: 'boolean',
      description: 'Подчиняется ли select общим правилам адаптива',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const SelectBasic = {
  args: {
    options,
    adaptive: true,
    currentOption,
    handleSelect: (option: Option) => {
      currentOption = option;
    },
  },
  render: Template,
};
