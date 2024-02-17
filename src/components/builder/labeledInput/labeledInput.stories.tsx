import type { Meta, StoryObj } from '@storybook/react';
import LabeledInput from './labeledInput';
import Input from '../../../ui/inputs/input/input';

const meta: Meta<typeof LabeledInput> = {
  title: 'COMPONENTS/Builder/other-components/labeled-input',
  component: LabeledInput,
};

export default meta;

type Story = StoryObj<typeof LabeledInput>;

export const LabeledInputFilled: Story = {
  args: {
    title: 'Название блока',
    children: <Input onChange={() => {}} placeholder="Введите" />,
  },
};
