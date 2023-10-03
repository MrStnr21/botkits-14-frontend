import { FC, useState } from 'react';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';

import stylesSubscription from './subscription.module.scss';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import ActivatePromoCodePopup from '../../components/popups/activate-promo-code-popup/activate-promo-code-popup';
import useModal from '../../services/hooks/use-modal';
import PaymentPopup from '../../components/popups/activate-subscription-popup/payment-popup';

const Subscription: FC = (): JSX.Element => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const [popupType, setPopupType] = useState<
    'activatePromoCode' | 'subscription' | null
  >(null);
  const handleActivateSubscription = (type: 'subscription') => {
    openModal();
    setPopupType(type);
  };

  const handleActivatePromoCode = (type: 'activatePromoCode') => {
    openModal();
    setPopupType(type);
  };

  return (
    <div className={stylesSubscription.container}>
      <h2 className={stylesSubscription.title}>Подписка и платежи</h2>
      <div className={stylesSubscription.container__body}>
        <div className={stylesSubscription.subscription}>
          <div className={stylesSubscription.subscription__header}>
            <Typography tag="h3">Тариф</Typography>
            <h4 className={stylesSubscription.subscription__status}>Статус</h4>
            <p className={stylesSubscription.subscription__info}>Инфо</p>
            <div className={stylesSubscription.subscription__button}>
              <Button
                variant="default"
                color="green"
                onClick={() => handleActivateSubscription('subscription')}
              >
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
            <Button
              variant="default"
              color="grey"
              onClick={() => handleActivatePromoCode('activatePromoCode')}
            >
              Активировать промокод
            </Button>
          </div>
        </div>
        <div className={stylesSubscription.payment}>payment</div>
      </div>
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <div className={stylesSubscription.modal}>
            {popupType === 'activatePromoCode' && <ActivatePromoCodePopup />}
            {popupType === 'subscription' && <PaymentPopup />}
          </div>
        </ModalPopup>
      )}
    </div>
  );
};

export default Subscription;
