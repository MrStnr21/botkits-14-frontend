import type { Meta, StoryFn } from '@storybook/react';
import CheckboxWithText, { CheckboxTextProps } from './CheckboxWithText';

export default {
  title: 'UI/CheckboxWithText',
  component: CheckboxWithText,
} as Meta;

const Template: StoryFn<CheckboxTextProps> = (args) => (
  <CheckboxWithText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Опубликовать',
  checked: true,
  disabled: false,
  onChange: (checked) => console.log(checked),
};
