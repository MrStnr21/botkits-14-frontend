import { Meta, StoryFn } from '@storybook/react';
import Icon, { IIcon } from './icon';
import IconMapping from './icon-mapping';

const meta: Meta<IIcon> = {
  component: Icon,
  title: 'UI/Icon',
  argTypes: {
    size: {
      type: 'number',
      description: 'Размер иконки (высота и ширина) в пикселях',
      control: {
        type: 'number',
      },
    },
    icon: {
      type: 'string',
      description:
        'Имя иконки. Все доступные имена хранятся в IconMapping. На текущий момент отрендерятся не все иконки, т.к. не для всех проверены источники',
      options: Object.keys(IconMapping),
      control: {
        type: 'select',
      },
    },
    extraClass: {
      type: 'string',
      description: 'Дополнительная стилизация иконки, например - для анимации',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Компонент для отображения монохромных иконок.
          Позволяет управлять размером, добавлять дополнительную стилизацию.
          Цвет задаётся в css с помощью свойства '--flood-color'.
          Заданный цвет применяется к иконке с помощью SVG-фильтра. В случае, если цвет не задан, иконка сохраняет свой оригинальный цвет.
          Компонент написан с учётом того, что иконки не хранятся по внешнему URL-адресу, а включены непосредственно в проект и загружаются во время сборки.
          `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<IIcon> = (args) => <Icon {...args} />;

export const IconComponent = {
  args: {
    icon: 'syncDone',
    size: 24,
  },
  render: Template,
};
