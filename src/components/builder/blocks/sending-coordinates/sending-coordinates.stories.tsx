import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import SendingCoordinatesBlock from './sending-coordinates';

const data = {
  name: 'test name',
  coordinates: [],
};

const meta: Meta<typeof SendingCoordinatesBlock> = {
  title: 'COMPONENTS/Builder/other-components/blocks/sending-coordinates',
  component: SendingCoordinatesBlock,
};

export default meta;

type Story = StoryObj<typeof SendingCoordinatesBlock>;

export const BlockCoordinates: Story = {
  render: () => (
    <ReactFlowProvider>
      <SendingCoordinatesBlock data={data} />
    </ReactFlowProvider>
  ),
};
