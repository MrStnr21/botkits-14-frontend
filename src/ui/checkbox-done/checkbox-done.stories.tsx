import type { Meta, StoryFn } from '@storybook/react';
import CheckboxDone, { CheckboxProps } from './checkbox-done';

export default {
  title: 'UI/CheckboxDone',
  component: CheckboxDone,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <CheckboxDone {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Опубликовать',
  checked: true,
  disabled: false,
  onChange: (checked) => console.log(checked),
};
