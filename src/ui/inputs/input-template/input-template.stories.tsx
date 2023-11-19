import type { Meta, StoryFn } from '@storybook/react';
import InputTemplate, { IInputTemplate } from './input-template';

export default {
  title: 'UI/Fields/InputTemplate',
  component: InputTemplate,
  argTypes: {
    placeholder: {
      type: 'string',
      description: 'Плейсхолдер',
      name: 'Плейсхолдер',
    },
    value: {
      type: 'string',
      description: 'Значение',
      name: 'Значение',
    },
    size: {
      type: 'string',
      description: 'Размер инпута',
      defaultValue: 'small',
      options: ['small', 'big'],
      control: {
        type: 'radio',
      },
    },
    color: {
      type: 'string',
      description: 'Цвет плейсхолдерa',
      defaultValue: 'grey',
      options: ['grey', 'black'],
      control: {
        type: 'radio',
      },
    },
    onChange: {
      action: 'clicked',
      description: 'Callback функция, изменяемая значение написанное в инпуте',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<IInputTemplate>;

const Template: StoryFn<IInputTemplate> = (args) => <InputTemplate {...args} />;

export const InputTemplateDefault = {
  args: {
    placeholder: 'Описание бота...',
    value: 'Это бот, который может все',
    size: 'small',
    color: 'grey',
  },
  render: Template,
};
