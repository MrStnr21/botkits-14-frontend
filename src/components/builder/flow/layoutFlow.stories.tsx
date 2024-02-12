import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'storybook-addon-react-router-v6';
import LayoutFlow from './layoutFlow';
import store from '../../../services/store';

const meta: Meta<typeof LayoutFlow> = {
  title: 'COMPONENTS/Builder/layout',
  component: LayoutFlow,
  decorators: [withRouter],
  argTypes: {
    options: {
      description: 'Элементы меню',
    },
    layout: {
      type: 'string',
      description:
        'Лэйаут ReactFlow с выбором и настройками блоков, а также связей между ними',
      defaultValue: 'message-block',
      options: [
        'message-block',
        'api',
        'conditional',
        'deep-link',
        'saving-to-crm',
        'sending-coordinates',
        'telegram-payment',
        'transfer-to-operator',
        'variable',
        'triggerBlock',
      ],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LayoutFlow>;

export const Layout: Story = {
  render: () => (
    <Provider store={store}>
      <LayoutFlow />
    </Provider>
  ),
};
