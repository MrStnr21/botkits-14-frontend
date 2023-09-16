import type { Meta, StoryFn } from '@storybook/react';
import ButtonAddBlock, { IButtonAddBlock } from './button-add-block';
import api from '../../../images/icon/24x24/add block/api.svg';
import credit from '../../../images/icon/24x24/add block/credit-card.svg';
import deeplink from '../../../images/icon/24x24/add block/deeplink.svg';
import git from '../../../images/icon/24x24/add block/git-branch.svg';
import headphones from '../../../images/icon/24x24/add block/headphones.svg';
import map from '../../../images/icon/24x24/add block/map-pin.svg';
import message from '../../../images/icon/24x24/add block/message-square.svg';
import sliders from '../../../images/icon/24x24/add block/sliders.svg';
import table from '../../../images/icon/24x24/add block/table.svg';

const icons = {
  api,
  credit,
  deeplink,
  git,
  headphones,
  map,
  message,
  sliders,
  table,
};

export default {
  title: 'UI/Buttons/Button-Add-Block',
  component: ButtonAddBlock,
  argTypes: {
    hover: {
      description: 'Изменение кнопки при наведении',
    },
    disabled: {
      type: 'boolean',
      description: 'Вариант активности кнопки',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    name: {
      type: 'string',
      description: 'Введите текст кнопки',
    },
    icon: {
      type: 'string',
      description: 'Вариант блока',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: {
          api: 'API',
          credit: 'Оплата',
          deeplink: 'Deeplink',
          git: 'Условный блок',
          headphones: 'Перевод на оператора',
          map: 'Координаты',
          message: 'Блок сообщений',
          sliders: 'Управление переменными',
          table: 'Сохранение данных в CRM',
        },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Добавление блока при клике',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IButtonAddBlock>;

/* prettier-ignore */
const Template: StoryFn<IButtonAddBlock> = (args) => <ButtonAddBlock {...args} />;

export const Button = {
  args: {
    disabled: false,
    name: 'API',
    icon: api,
  },
  render: Template,
};
