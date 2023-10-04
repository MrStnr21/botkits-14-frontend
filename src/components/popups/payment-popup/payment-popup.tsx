import React, { FC } from 'react';
import stylesPaymentPopup from './payment-popup.module.scss';
import Button from '../../../ui/buttons/button/button';
import Typography from '../../../ui/typography/typography';
import YooMoneyLogo from '../../icons/YooMoneyLogo/YooMoneyLogo';
import checkMark from '../../../images/icon/template/check-mark.svg';
import rocketBot from '../../../images/icon/template/rocketBot.svg';

interface IPaymentPopup {
  onClick?: () => void;
}

const PaymentPopup: FC<IPaymentPopup> = ({ onClick }): JSX.Element | null => {
  return (
    <div className={stylesPaymentPopup.container}>
      <Typography tag="h2">Подписаться</Typography>
      <img
        className={stylesPaymentPopup.iconRocketBot}
        src={rocketBot}
        alt="checkMarkIcon"
      />
      <div className={stylesPaymentPopup.linkWrapper}>
        <div className={stylesPaymentPopup.groupTitle}>
          <h4 className={stylesPaymentPopup.tariff}>Выбери тариф</h4>
          <img
            className={stylesPaymentPopup.iconCheck}
            src={checkMark}
            alt="checkMarkIcon"
          />
        </div>
        <div className={stylesPaymentPopup.linkGroup}>
          <div className={stylesPaymentPopup.linkBtn}>
            <h4 style={{ marginLeft: '24px' }}>Старт</h4>
            <h4 style={{ marginLeft: '94px', color: '#433FB8' }}>390</h4>
            <h4 style={{ marginLeft: '5px' }}>pуб</h4>
          </div>
          <div className={stylesPaymentPopup.linkBtn}>
            <h4 style={{ marginLeft: '24px' }}>Стандарт</h4>
            <h4 style={{ marginLeft: '94px', color: '#433FB8' }}>790</h4>
            <h4 style={{ marginLeft: '5px' }}>pуб</h4>
          </div>
          <div className={stylesPaymentPopup.linkBtn}>
            <h4 style={{ marginLeft: '24px' }}>Бизнес</h4>
            <h4 style={{ marginLeft: '94px', color: '#433FB8' }}>1390</h4>
            <h4 style={{ marginLeft: '5px' }}>pуб</h4>
          </div>
        </div>
      </div>
      <Typography tag="h4">
        Цены на тарифы указаны за 1 месяц пользования.
      </Typography>
      <Typography tag="p">
        Оплата будет автоматически взиматься каждый месяц до тех пор, пока вы не
        отмените подписку.
      </Typography>
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
