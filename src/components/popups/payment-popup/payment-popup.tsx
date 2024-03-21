/* eslint-disable no-underscore-dangle */
import React, { FC, useEffect, useState, useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import stylesPaymentPopup from './payment-popup.module.scss';
import Button from '../../../ui/buttons/button/button';
import Typography from '../../../ui/typography/typography';
import rocketBot from '../../../images/icon/template/rocketBot.svg';
import logoUkassaIcon from '../../../images/icon/logoUkassaIcon.svg';
import CheckIcon from '../../../ui/icons/Check/CheckIcon';
import { getTariffs } from '../../../api/tariffs';
import { TableData } from '../../enhanced-table/enhanced-table';

interface IPaymentPopup {
  onClick: (id: string) => void;
}

const PaymentPopup: FC<IPaymentPopup> = ({ onClick }): JSX.Element | null => {
  const [selectedTariff, setSelectedTariff] = useState<TableData | null>(null);
  const [tariffs, setTariffs] = useState<TableData[]>([]);
  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLDivElement>;

  const { events } = useDraggable(ref);

  useEffect(() => {
    getTariffs().then((data) => {
      const filtered = data.filter((tariff) => !tariff.isDemo);
      setTariffs(filtered);
      setSelectedTariff(filtered[0]);
    });
  }, []);

  const clickHandler = () => {
    if (!selectedTariff) {
      return;
    }
    onClick(selectedTariff._id as string);
  };

  return (
    <dialog className={stylesPaymentPopup.paymentPopupContainer}>
      <div className={stylesPaymentPopup.lightGrayBackgroundWrapper} />
      <Typography
        fontFamily="secondary"
        className={stylesPaymentPopup.title}
        tag="h2"
      >
        Подписаться
      </Typography>
      <img
        className={stylesPaymentPopup.iconRocketBot}
        src={rocketBot}
        alt="checkMarkIcon"
      />
      <div className={stylesPaymentPopup.linkWrapper}>
        <div className={stylesPaymentPopup.wrapperTariffTitle}>
          <Typography
            tag="h4"
            fontFamily="secondary"
            className={stylesPaymentPopup.tariffTitle}
          >
            Выбери тариф
          </Typography>
          <CheckIcon color="#00E98F" width={30} />
        </div>
        <div ref={ref} {...events} className={stylesPaymentPopup.linkGroup}>
          {tariffs.map((tariff) => (
            <div
              key={tariff.id}
              onClick={() => setSelectedTariff(tariff)}
              className={`${stylesPaymentPopup.linkBtn} ${
                tariff._id === selectedTariff?._id
                  ? stylesPaymentPopup.selected
                  : ''
              }`}
            >
              <Typography
                fontFamily="secondary"
                className={stylesPaymentPopup.nameTariff}
                tag="h4"
              >
                {tariff.name}
              </Typography>
              <div className={stylesPaymentPopup.wrapperPrice}>
                <Typography
                  tag="h4"
                  fontFamily="secondary"
                  className={stylesPaymentPopup.price}
                >
                  {tariff.price}
                </Typography>
                <Typography
                  fontFamily="secondary"
                  className={stylesPaymentPopup.currency}
                  tag="h4"
                >
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
          <Typography
            fontFamily="secondary"
            className={stylesPaymentPopup.totalPrice}
            tag="h4"
          >
            К оплате:&nbsp;
          </Typography>
          <Typography
            fontFamily="secondary"
            className={stylesPaymentPopup.totalPrice}
            tag="h4"
          >
            {selectedTariff?.price}&nbsp;
          </Typography>
          <Typography className={stylesPaymentPopup.totalPrice} tag="p">
            руб
          </Typography>
        </div>
        <div className={stylesPaymentPopup.paymentButtonsContainer}>
          <Button
            onClick={clickHandler}
            size="large"
            variant="default"
            color="blue"
            buttonHtmlType="submit"
          >
            <div className={stylesPaymentPopup.logoUkassaIcon}>
              <Typography
                fontFamily="secondary"
                className={stylesPaymentPopup.totalPrice}
                tag="h5"
              >
                Оплатить через
              </Typography>
              <img alt="logoUkassaIcon" src={logoUkassaIcon} />
            </div>
          </Button>
          <Button
            onClick={clickHandler}
            size="large"
            variant="default"
            color="light-grey"
            buttonHtmlType="submit"
          >
            <Typography
              fontFamily="secondary"
              className={stylesPaymentPopup.requestInvoiceText}
              tag="h5"
            >
              Запросить счет
            </Typography>
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default PaymentPopup;
