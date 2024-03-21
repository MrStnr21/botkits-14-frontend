import type { StoryObj } from '@storybook/react';
import InputDialogsues from './input-dialogues';

const meta = {
  title: 'UI/Fields/Input Dialogues',
  component: InputDialogsues,
  argTypes: {
    search: {
      type: 'boolean',
      description: 'Показывать ли иконку поиска',
      defaultValue: true,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    iconVisible: {
      type: 'boolean',
      description: 'Показывать ли кнопку, открывающую фильтры',
      defaultValue: true,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback функция, вызываемая при клике',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDialogsuesDefault: Story = {};
