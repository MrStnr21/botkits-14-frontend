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
    step: '1',
    text: 'Загрузить страницу',
    // eslint-disable-next-line no-console
    children: <LoadPages arr={[]} onClick={() => console.log(1)} />,
  },
};

export const StepperFillBotWithInput: Story = {
  args: {
    step: '1',
    text: 'Ключ доступа',
    children: <Input onChange={() => {}} />,
  },
};

export const StepperFillBotName: Story = {
  args: {
    step: '2',
    text: 'Назвавние бота',
    children: <Input onChange={() => {}} />,
  },
};
