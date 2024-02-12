import { ReactFlowProvider } from 'reactflow';
import TelegramPayment from './telegram-payment';

const data = {
  name: 'TelegramPay',
  goodsName: '',
  description: '',
  payment: 0,
  currency: '',
  providerToken: '',
  onSuccess: '',
};

export default {
  title: 'COMPONENTS/Builder/other-components/blocks/TelegramPayment',
  component: TelegramPayment,
};

export const Default = () => (
  <ReactFlowProvider>
    <TelegramPayment data={data} />
  </ReactFlowProvider>
);
