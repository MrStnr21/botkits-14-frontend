/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, StoryObj } from '@storybook/react';
import Trigger, { ITriggerProps } from './trigger';
import { TTrigger } from '../../../../../services/types/builder';

const meta = {
  title: 'COMPONENTS/Builder/Triggers/Trigger',
  component: Trigger,
} satisfies Meta<ITriggerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TriggerDef: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleTriggerData: (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      typeOfAction: 'add' | 'delete' | 'update',
      optional: {
        trigger?: TTrigger;
        id?: string;
      }
    ) => {},
    id: 'id',
    myTag: 'start',
    type: 'block',
  },
};
