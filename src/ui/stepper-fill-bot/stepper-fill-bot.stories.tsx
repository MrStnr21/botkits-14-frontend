import type { StoryObj } from '@storybook/react';
import StepperFillBot from './stepper-fill-bot';

const meta = {
  title: 'COMPONENTS/StepperFillBot',
  component: StepperFillBot,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StepperFillBotDefault: Story = {
  args: {
    step: '1',
    text: 'Ключ доступа',
  },
};
