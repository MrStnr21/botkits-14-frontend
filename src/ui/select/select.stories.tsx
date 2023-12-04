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

export default {
  title: 'UI/Select',
  component: Select,
} as Meta<typeof Select>;

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
