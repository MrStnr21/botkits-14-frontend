import { Meta, StoryFn } from '@storybook/react';
import ButtonBasic, { IButtonBasic } from './button-basic';
import IconMapping from '../../icon/icon-mapping';

const btnStyles = `
body {
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
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
  width: 16px;
  height: 16px;
}

.button:hover svg {
  transform: rotate(-180deg);
  transition: transform 0.3s ease;
}
}
`;

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
    isIconColored: {
      type: 'boolean',
      description: 'Можно ли управлять цветом иконки через css',
      control: {
        type: 'boolean',
        default: false,
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

const Template: StoryFn<typeof ButtonBasic> = (args) => (
  <ButtonBasic {...args} />
);

export const ButtonBasicComponent = {
  args: {
    icon: 'chevronDown',
    iconType: 'right',
    btnStyle: 'button',
    isIconColored: true,
    children: 'Открыть',
  },
  render: Template,
};
