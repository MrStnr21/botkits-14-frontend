import React, { FC } from 'react';
import stylesPaymentPopup from './payment-popup.module.scss';
import Button from '../../../ui/buttons/button/button';
import Typography from '../../../ui/typography/typography';
import YooMoneyLogo from '../../icons/YooMoneyLogo/YooMoneyLogo';

interface IPaymentPopup {
  onClick?: () => void;
}
const PaymentPopup: FC<IPaymentPopup> = ({ onClick }): JSX.Element | null => {
  return (
    <div className={stylesPaymentPopup.container}>
      <Typography tag="h2">Подписаться</Typography>
      <div className={stylesPaymentPopup.btnWrapper}>
        <Button
          onClick={onClick}
          size="large"
          variant="default"
          color="blue"
          buttonHtmlType="submit"
        >
          Оплатить через &nbsp; <YooMoneyLogo />
        </Button>
        <Button
          onClick={onClick}
          size="large"
          variant="default"
          color="light-grey"
          buttonHtmlType="submit"
        >
          Запросить счет
        </Button>
      </div>
    </div>
  );
};

export default PaymentPopup;
