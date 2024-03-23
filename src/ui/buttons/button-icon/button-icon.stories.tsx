import { Meta, StoryFn } from '@storybook/react';
import ButtonIcon, { IButtonIcon } from './button-icon';
import IconMapping from '../../icon/icon-mapping';

const btnStyles = `
body {
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  background-color: #ECEFFF;
  color: #243CBB;
}

.button:hover {
  background-color: #F8F9FB;
}

.button svg {
  width: 24px;
  height: 24px;
}
`;
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
      type: 'string',
      description: 'Стилизация иконки: размеры, цвет, анимация и т.д.',
      control: false,
    },
    isIconColored: {
      description: 'Можно ли управлять цветом иконки через css',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <style>{btnStyles}</style>
        <Story />
      </>
    ),
  ],
};

export default meta;

const Template: StoryFn<IButtonIcon> = (args) => <ButtonIcon {...args} />;

export const ButtonIconComponent = {
  args: {
    icon: 'settings',
    btnStyle: 'button',
    isIconColored: true,
  },
  render: Template,
};
