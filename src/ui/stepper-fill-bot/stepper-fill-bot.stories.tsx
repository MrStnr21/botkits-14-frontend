import type { StoryObj } from '@storybook/react';
import StepperFillBot from './stepper-fill-bot';
import LoadPages from '../inputs/load-pages/load-pages';
import Input from '../inputs/input/input';

const meta = {
  title: 'UI/StepperFillBot',
  component: StepperFillBot,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StepperFillBotWithLoadPages: Story = {
  args: {
    step: '1 Шаг',
    text: 'Загрузить страницу',
    children: <LoadPages arr={[]} onClick={() => console.log(1)} />,
  },
};

export const StepperFillBotWithInput: Story = {
  args: {
    step: '1 Шаг',
    text: 'Ключ доступа',
    children: <Input />,
  },
};

export const StepperFillBotName: Story = {
  args: {
    step: '2 Шаг',
    text: 'Назвавние бота',
    children: <Input />,
  },
};
