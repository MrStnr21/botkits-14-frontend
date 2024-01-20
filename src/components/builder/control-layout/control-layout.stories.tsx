import type { Meta, StoryObj } from '@storybook/react';
import { ReactFlowProvider } from 'reactflow';
// import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { withRouter } from 'storybook-addon-react-router-v6';
// import store from '../../../services/store';
import ControlLayout from './control-layout';

const meta: Meta<typeof ControlLayout> = {
  title: 'COMPONENTS/Builder/control-layout',
  component: ControlLayout,
  // decorators: [withRouter],
};

const styleContainer = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '8px',
  padding: '8px',
};

const stylesInner = {
  height: '100px',
  width: '100%',
  background: '#F8F9FB',
};

export default meta;

type Story = StoryObj<typeof ControlLayout>;

// Вариант с рендером сразу двух блоков
export const LayoutFilled: Story = {
  render: () => (
    // <Provider store={store}>
    <ReactFlowProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <ControlLayout type="Тип блока">
          <div style={styleContainer}>
            <div style={stylesInner} />
            <div style={stylesInner} />
            <div style={stylesInner} />
          </div>
        </ControlLayout>
      </div>
    </ReactFlowProvider>
    // </Provider>
  ),
};
