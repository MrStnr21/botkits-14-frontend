import { Meta, StoryFn } from '@storybook/react';
import ButtonIcon, { IButtonIcon } from './button-icon';
import IconMapping from '../../icon/icon-mapping';

const meta: Meta<IButtonIcon> = {
  component: ButtonIcon,
  title: 'UI/Buttons/ButtonIcon',
  argTypes: {
    icon: {
      type: 'string',
      description: 'Имя иконки на кнопке.',
      options: Object.keys(IconMapping),
      control: {
        type: 'select',
      },
    },
    btnStyle: {
      description: 'Внешний вид иконки',
    },
    extraClass: {
      type: 'string',
      description: 'Стилизация иконки: размеры, цвет, анимация и т.д.',
      control: false,
    },
    isIconColored: {
      description: 'Возможно ли перекрашивание иконки',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryFn<IButtonIcon> = (args) => <ButtonIcon {...args} />;

export const ButtonIconComponent = {
  args: {
    icon: 'italic',
    isIconColored: true,
  },
  render: Template,
};
