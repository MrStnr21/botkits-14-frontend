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
    isColored: {
      type: 'boolean',
      description:
        'Можно ли управлять цветом иконки через css. False для многоцветных иконок',
      control: {
        type: 'boolean',
        default: false,
      },
    },
    extraClass: {
      type: 'string',
      description: 'Стилизация иконки: размеры, цвет, анимация и т.д.',
      control: false,
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `Компонент для отображения иконок.

Заданный цвет применяется к иконке с помощью SVG-фильтра.
Компонент написан с учётом того, что иконки не хранятся по внешнему URL-адресу, а включены непосредственно в проект и загружаются во время сборки.

- icon - строка для идентификации иконки. Полный список - icon-mapping.ts
- isColored - boolean, можно ли управлять цветом иконки из css. Позволяет использовать в компоненте многоцветные иконки.
- extraClass - устанавливает цвет и размер иконки, добавляет дополнительную стилизацию, например, анимацию.

          Пример применения для монохромных иконок:

          <Icon icon="chevron" isColored extraClass={styles.icon}>
          .icon {
            width: 24px;
            height: 24px;
            color: $secondary-cultured-press;
          }

          Пример применения для многоцветных иконок:

          <Icon icon="chevron" isColored={false} extraClass={styles.icon}>
          .icon {
            width: 24px;
            height: 24px;
          }
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
    isColored: false,
  },
  render: Template,
};
