import type { Meta, StoryObj } from '@storybook/react';

import PeriodSelectButton, {
  IPeriodSelectButton,
} from './period-select-button';

const meta: Meta<IPeriodSelectButton> = {
  component: PeriodSelectButton,
  argTypes: {
    option: {
      description: 'Выбранный период, тип: Option',
      defaultValue: {
        label: '14 дней',
        value: '14days',
      },
    },
    isOpen: {
      type: 'boolean',
      description: 'Открыто ли выпадающее меню',
      defaultValue: false,
      options: [false, true],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      action: 'clicked',
      description: `Callback функция, вызываемая при клике.`,
    },
    formatLabel: {
      type: 'function',
      description:
        'Функция, изменяющая надпись на кнопке. Сокращает "Последние N дней" до "N дней"',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PeriodSelectButton>;

const shortenLabel = (label: string): string => {
  const match = label.match(/последние (\d+) дней/i);
  if (match && match[1]) {
    const numberOfDays = match[1];
    return `${numberOfDays} дней`;
  }

  return label;
};

export const Button: Story = {
  args: {
    option: {
      label: '14 дней',
      value: '14days',
    },
    isOpen: false,
    formatLabel: shortenLabel,
  },
  render: (args) => <PeriodSelectButton {...args} />,
};
