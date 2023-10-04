import { FC } from 'react';
import cn from 'classnames';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import { rows, PaymentTable } from './payment-table/payment-table';
import style from './subscription.module.scss';

const Subscription: FC = (): JSX.Element => {
  return (
    <div className={style.container}>
      <Typography tag="h2">Подписка и платежи</Typography>
      <div className={style.container__body}>
        <div className={cn(style.subscription, style.container__subscription)}>
          <div className={style.subscription__header}>
            <Typography tag="h3" className={style.subscription__rate}>
              Тариф
            </Typography>
            <Typography tag="h4" className={style.subscription__status}>
              Статус
            </Typography>
            <Typography tag="span" className={style.subscription__info}>
              Инфо
            </Typography>
            <div className={style.subscription__button}>
              <Button variant="default" color="green">
                Активировать подписку
              </Button>
            </div>
          </div>
          <div className={style.subscription__body}>
            <div className={style.subscription__balance}>
              <Typography tag="span">Баланс</Typography>
              <Typography tag="h3">{`${0}₽`}</Typography>
            </div>
            <Button variant="default" color="grey">
              Активировать промокод
            </Button>
          </div>
        </div>
        <div className={style.payment}>
          <div className={style.payment__header}>
            <Typography tag="h4">История платежей</Typography>
            <Typography tag="p">All</Typography>
          </div>
          <PaymentTable tableData={rows} />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
