import type { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './checkbox';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
  checked: false,
  onChange: (checked) => console.log(checked),
};
