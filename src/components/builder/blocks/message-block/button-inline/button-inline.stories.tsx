import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import InlineButton from './button-inline';

const data = {
  type: 'button' as const,
  name: 'кнопка' as const,
  direction: 'horizontal' as const,
  color: 'white',
  str: 'Какой-то текст' as const,
  mobY: 0,
  deskY: 0,
};

const divStyles = {
  height: '500px',
  width: '500px',
  gap: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const meta: Meta<typeof InlineButton> = {
  title:
    'COMPONENTS/Builder/other-components/blocks/message-block/button-inline',
  component: InlineButton,
};

export default meta;

type Story = StoryObj<typeof InlineButton>;

export const Block: Story = {
  render: () => (
    <ReactFlowProvider>
      <div style={divStyles}>
        <InlineButton data={data} />
        <InlineButton data={{ ...data, type: 'answer' }} />
      </div>
    </ReactFlowProvider>
  ),
};
