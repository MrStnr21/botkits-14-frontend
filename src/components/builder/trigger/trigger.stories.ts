import { Meta, StoryObj } from '@storybook/react';
import Trigger, { ITriggerProps } from './trigger';

const meta = {
  title: 'COMPONENTS/Builder/Triggers/Trigger',
  component: Trigger,
} satisfies Meta<ITriggerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TriggerDef: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteTrigger: (id: string) => {},
    id: 'id',
  },
};
