import { Meta, StoryFn } from '@storybook/react';
import Icon, { IIcon } from './icon';
import IconMapping from './icon-mapping';

const meta: Meta<IIcon> = {
  component: Icon,
  title: 'UI/Icon',
  argTypes: {
    icon: {
      type: 'string',
      description: 'Имя иконки. Все доступные имена хранятся в IconMapping.',
      options: Object.keys(IconMapping),
      control: {
        type: 'select',
      },
    },
    extraClass: {
      type: 'string',
      description: 'Стилизация иконки: размеры, цвет, анимация и т.д.',
      control: false,
    },
    notColored: {
      type: 'boolean',
      description:
        'Можно ли управлять цветом иконки через css. Например, для многоцветных иконок',
      control: {
        type: 'boolean',
        default: false,
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Компонент для отображения монохромных иконок.
          через пропс style позволяет управлять размером, цветом, добавлять дополнительную стилизацию.
          Заданный цвет применяется к иконке с помощью SVG-фильтра.
          В случае многоцветной иконки необходимо указать notColored, чтобы фильтр не применялся.
          Компонент написан с учётом того, что иконки не хранятся по внешнему URL-адресу, а включены непосредственно в проект и загружаются во время сборки.
          `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const styleIcon = {
  width: '24px',
  height: '24px',
  color: 'black',
};

const Template: StoryFn<IIcon> = (args) => (
  <div style={styleIcon}>
    <Icon {...args} />
  </div>
);

export const IconComponent = {
  args: {
    icon: 'syncDone',
    notColored: false,
  },
  render: Template,
};
