import { ReactFlowProvider } from 'reactflow';
import TelegramPayment from './telegram-payment';

export default {
  title: 'COMPONENTS/Builder/blocks/TelegramPayment',
  component: TelegramPayment,
};

export const Default = () => (
  <ReactFlowProvider>
    <TelegramPayment data={{ name: 'test name' }} />
  </ReactFlowProvider>
);
