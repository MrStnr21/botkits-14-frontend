import type { Meta, StoryObj } from '@storybook/react';
import SendingCoordinatesBlock from './sending-coordinates-block';

const meta: Meta<typeof SendingCoordinatesBlock> = {
  component: SendingCoordinatesBlock,
};

export default meta;

type Story = StoryObj<typeof SendingCoordinatesBlock>;

export const BlockCoordinates: Story = {
  args: {
    nameSetter: () => {},
  },
};
