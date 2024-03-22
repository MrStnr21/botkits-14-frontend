import { Meta, StoryFn } from '@storybook/react';
import ButtonBasic, { IButtonBasic } from './button-basic';
import IconMapping from '../../icon/icon-mapping';

const meta: Meta<IButtonBasic> = {
  component: ButtonBasic as React.ComponentType<IButtonBasic>,
  title: 'UI/Buttons/ButtonBasic',
  argTypes: {
    icon: {
      type: 'string',
      description: 'Имя иконки на кнопке.',
      options: Object.keys(IconMapping),
      control: {
        type: 'select',
      },
    },
    iconType: {
      description: 'Расположение иконки',
      defaultValue: 'basic',
      options: ['basic', 'left', 'right'],
      control: {
        type: 'radio',
      },
    },
    btnStyle: {
      type: 'string',
      description: 'Стилизация иконки: размеры, цвет, анимация и т.д.',
      control: false,
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryFn<typeof ButtonBasic> = (args) => (
  <ButtonBasic {...args} />
);

export const ButtonBasicComponent = {
  args: {
    icon: 'syncDone',
  },
  render: Template,
};
