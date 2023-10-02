import { FC } from 'react';

import stylesSubscription from './subscription.module.scss';

const Subscription: FC = (): JSX.Element => {
  return (
    <div className={stylesSubscription.container}>
      <h2 className={stylesSubscription.title}>Подписка и платежи</h2>
    </div>
  );
};

export default Subscription;
