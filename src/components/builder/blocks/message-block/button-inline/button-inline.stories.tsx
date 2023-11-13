import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
import InlineButton from './button-inline';

const data = {
  type: 'button' as const,
  name: 'кнопка' as const,
  str: 'Какой-то текст' as const,
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
  component: InlineButton,
};

export default meta;

type Story = StoryObj<typeof InlineButton>;

export const Block: Story = {
  render: () => (
    <ReactFlowProvider>
      <div style={divStyles}>
        <InlineButton data={data} />
        <InlineButton data={{ name: 'инпут', type: 'answer' }} />
      </div>
    </ReactFlowProvider>
  ),
};
