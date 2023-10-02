import { FC } from 'react';
import Button from '../../ui/buttons/button/button';

import stylesSubscription from './subscription.module.scss';

const Subscription: FC = (): JSX.Element => {
  return (
    <div className={stylesSubscription.container}>
      <h2 className={stylesSubscription.title}>Подписка и платежи</h2>
      <div className={stylesSubscription.container__body}>
        <div className={stylesSubscription.subscription}>
          <div className={stylesSubscription.subscription__header}>
            <h3 className={stylesSubscription.subscription__rate}>Тариф</h3>
            <h4 className={stylesSubscription.subscription__status}>Статус</h4>
            <p className={stylesSubscription.subscription__info}>Инфо</p>
            <div className={stylesSubscription.subscription__button}>
              <Button variant="default" color="green">
                Активировать подписку
              </Button>
            </div>
          </div>
          <div className={stylesSubscription.subscription__body}>
            <div className={stylesSubscription.subscription__balance}>
              <p className={stylesSubscription.subscription__text}>Баланс</p>
              <h3 className={stylesSubscription.subscription__price}>
                {`${0}₽`}
              </h3>
            </div>
            <Button variant="default" color="grey">
              Активировать промокод
            </Button>
          </div>
        </div>
        <div className={stylesSubscription.payment}>payment</div>
      </div>
    </div>
  );
};

export default Subscription;
