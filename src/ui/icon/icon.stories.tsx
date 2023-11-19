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
    color: {
      type: 'string',
      description:
        'Цвет иконки в формате HEX. Если не задан - используется предустановленный цвет иконки',
      control: 'color',
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
  },
  parameters: {
    layout: 'centered',
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
