import TelegramPayment from './telegram-payment';

export default {
  title: 'COMPONENTS/Builder/blocks/TelegramPayment',
  component: TelegramPayment,
};

export const Default = () => <TelegramPayment data={{ name: 'test name' }} />;
