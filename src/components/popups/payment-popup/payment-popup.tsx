import React, { FC, useState } from 'react';
import stylesPaymentPopup from './payment-popup.module.scss';
import Button from '../../../ui/buttons/button/button';
import Typography from '../../../ui/typography/typography';
import checkMark from '../../../images/icon/template/check-mark.svg';
import rocketBot from '../../../images/icon/template/rocketBot.svg';
import logoUkassaIcon from '../../../images/icon/logoUkassaIcon.svg';

interface IPaymentPopup {
  onClick?: () => void;
}

const tariffs = [
  { id: 'start', name: 'Старт', price: 390 },
  { id: 'standard', name: 'Стандарт', price: 790 },
  { id: 'business', name: 'Бизнес', price: 1390 },
];

const PaymentPopup: FC<IPaymentPopup> = ({ onClick }): JSX.Element | null => {
  const [selectedTariff, setSelectedTariff] = useState<number>(790);

  const handleTariffSelection = (tariffPrice: number) => {
    setSelectedTariff(tariffPrice);
  };

  return (
    <div className={stylesPaymentPopup.container}>
      <div className={stylesPaymentPopup.lightGrayBackgroundWrapper} />
      <Typography className={stylesPaymentPopup.title} tag="h2">
        Подписаться
      </Typography>
      <img
        className={stylesPaymentPopup.iconRocketBot}
        src={rocketBot}
        alt="checkMarkIcon"
      />
      <div className={stylesPaymentPopup.linkWrapper}>
        <div className={stylesPaymentPopup.wrapperTariffTitle}>
          <h4 className={stylesPaymentPopup.tariffTitle}>Выбери тариф</h4>
          <img
            className={stylesPaymentPopup.iconCheck}
            src={checkMark}
            alt="checkMarkIcon"
          />
        </div>
        <div className={stylesPaymentPopup.linkGroup}>
          {tariffs.map((tariff) => (
            <div
              key={tariff.id}
              onClick={() => handleTariffSelection(tariff.price)}
              className={`${stylesPaymentPopup.linkBtn} ${
                tariff.price === selectedTariff
                  ? stylesPaymentPopup.selected
                  : ''
              }`}
            >
              <Typography className={stylesPaymentPopup.nameTariff} tag="h4">
                {tariff.name}
              </Typography>
              <div className={stylesPaymentPopup.wrapperPrice}>
                <Typography tag="h4" className={stylesPaymentPopup.price}>
                  {tariff.price}
                </Typography>
                <Typography className={stylesPaymentPopup.currency} tag="h4">
                  pуб
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <Typography className={stylesPaymentPopup.description} tag="h4">
          Цены на тарифы указаны за 1 месяц пользования.
        </Typography>
        <Typography tag="p">
          Оплата будет автоматически взиматься каждый месяц до тех пор, пока вы
          не отмените подписку.
        </Typography>
      </div>
      <div className={stylesPaymentPopup.blackBackgroundWrapper} />
      <div className={stylesPaymentPopup.paymentButtonsWrapper}>
        <div className={stylesPaymentPopup.greyBackgroundWrapper} />
        <div className={stylesPaymentPopup.wrapperTotalPrice}>
          <Typography className={stylesPaymentPopup.totalPrice} tag="h4">
            К оплате:&nbsp;
          </Typography>
          <Typography className={stylesPaymentPopup.totalPrice} tag="h4">
            {selectedTariff}&nbsp;
          </Typography>
          <Typography className={stylesPaymentPopup.totalPrice} tag="p">
            руб
          </Typography>
        </div>
        <div className={stylesPaymentPopup.paymentButtonsContainer}>
          <Button
            onClick={onClick}
            size="large"
            variant="default"
            color="blue"
            buttonHtmlType="submit"
          >
            <div className={stylesPaymentPopup.logoUkassaIcon}>
              <Typography className={stylesPaymentPopup.totalPrice} tag="h5">
                Оплатить через
              </Typography>
              <img alt="logoUkassaIcon" src={logoUkassaIcon} />
            </div>
          </Button>
          <Button
            onClick={onClick}
            size="large"
            variant="default"
            color="light-grey"
            buttonHtmlType="submit"
          >
            <Typography
              className={stylesPaymentPopup.requestInvoiceText}
              tag="h5"
            >
              Запросить счет
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
