/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, MouseEvent, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import MenuSimple from '../../ui/menus/menu-simple/menu-simple';
import icon from '../../images/icon/20x20/chevron/down.svg';
import EnhancedTable, {
  TableData,
} from '../../components/enhanced-table/enhanced-table';
import style from './subscription.module.scss';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import ActivatePromoCodePopup from '../../components/popups/activate-promo-code-popup/activate-promo-code-popup';
import useModal from '../../services/hooks/use-modal';
import PaymentPopup from '../../components/popups/payment-popup/payment-popup';
import {
  columns,
  cellStyle,
  rowStyle,
  subscriptionStatus,
  subscriptionDropdownValues,
} from './subscriptionConfig';
import { sapHeadCell } from '../../components/table-cells/table-cells';
import {
  activatePromocode,
  getSubscriptions,
  makeSubscription,
  toggleSubscriptionStatus,
} from '../../api/subscriptions';
import { TSubscriptionData } from '../../services/types/subscription';
import { useAppDispatch } from '../../services/hooks/hooks';
import { createAddErrorAction } from '../../services/actions/errors/errors';

const dateTimeFormat = new Intl.DateTimeFormat('ru', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

const Subscription: FC = (): JSX.Element => {
  const [subscriptionData, setSubscriptionData] =
    useState<TSubscriptionData | null>(null);
  const [counter, refreshWithFetch] = useState(0);
  const [filterValue, setFilterValue] = useState<string>('all');
  const { isModalOpen, closeModal, openModal } = useModal();
  const [popupType, setPopupType] = useState<
    'activatePromoCode' | 'subscription' | null
  >(null);
  const dispatch = useAppDispatch();
  const handleActivateSubscription = (type: 'subscription') => {
    openModal();
    setPopupType(type);
  };

  useEffect(() => {
    getSubscriptions().then((data) => {
      setSubscriptionData({ ...data, payments: data.payments.reverse() });
    });
  }, [isModalOpen, counter]);

  if (!subscriptionData) {
    return <div />;
  }

  const handleActivatePromoCode = (type: 'activatePromoCode') => {
    openModal();
    setPopupType(type);
  };

  const usePromo = (promo: string) => {
    activatePromocode(promo)
      .catch(() =>
        dispatch(createAddErrorAction('Промокд не принят, попробуйте еще раз'))
      )
      .finally(() => closeModal());
  };

  const makeSubscribe = (id: string) => {
    makeSubscription(id)
      .catch(() =>
        dispatch(createAddErrorAction('Не удалось оформить подписку'))
      )
      .finally(() => closeModal());
  };

  const toggleTariffStatus = (status: boolean) => {
    toggleSubscriptionStatus(status)
      .catch(() =>
        dispatch(createAddErrorAction('Не удалось изменить статус подписки'))
      )
      .finally(() => refreshWithFetch(counter + 1));
  };

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };
  const renderFilteredRows = () => {
    switch (filterValue) {
      case 'all':
        return subscriptionData.payments;
      case 'income':
        return subscriptionData.payments.filter(
          (row) => row.operation === 'Поступления'
        );
      case 'withdrawals':
        return subscriptionData.payments.filter(
          (row) => row.operation === 'Списания'
        );
      default:
        return subscriptionData.payments;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.container__item}>
        <Typography tag="h2">Подписка и платежи</Typography>
        <div className={style.subscription}>
          <div className={style.subscription__header}>
            <div className={style.tariff}>
              <Typography tag="h3" className={style.subscription__rate}>
                {subscriptionData.tariff.name}
              </Typography>
              <Typography
                tag="h4"
                className={cn(
                  style.subscription__status,
                  style.text,
                  subscriptionData.status
                    ? style.text_succsess
                    : style.text_failure
                )}
              >
                {subscriptionData.status ? 'активен' : 'неактивен'}
              </Typography>
            </div>
            <div className={style.settings}>
              {subscriptionData.status && !subscriptionData.isCanceled ? (
                <>
                  <p className={style.info}>Следующее списание</p>
                  <p className={style.card}>
                    <span className={style.date}>
                      {dateTimeFormat.format(
                        new Date(subscriptionData.debitDate)
                      )}
                    </span>
                    <span className={style.mask}>
                      {subscriptionData.cardMask}
                    </span>
                  </p>
                  <button
                    onClick={() => toggleTariffStatus(true)}
                    className={style.button}
                    type="button"
                  >
                    отменить
                  </button>
                </>
              ) : (
                <>
                  <Typography tag="span" className={style.subscription__info}>
                    Инфо
                  </Typography>
                  <div className={style.subscription__button}>
                    <Button
                      variant="default"
                      color="green"
                      onClick={() => toggleTariffStatus(false)}
                    >
                      Активировать подписку
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={style.subscription__body}>
            <div className={style.subscription__balance}>
              <Typography tag="p">Баланс</Typography>
              <Typography tag="h3">{`${subscriptionData.balance}₽`}</Typography>
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
      </div>
      <div className={style.container__item}>
        <div className={style.container__button}>
          {subscriptionStatus.status && (
            <Button
              variant="default"
              size="small"
              color="green"
              onClick={() => handleActivateSubscription('subscription')}
            >
              Сменить тариф
            </Button>
          )}
        </div>

        <div className={style.payment}>
          <EnhancedTable
            header
            tableHeaderTitle="История платежей"
            headerOptions={subscriptionDropdownValues}
            onFilterChange={handleFilterChange}
            cellStyle={cellStyle}
            rowStyle={rowStyle}
            columns={columns}
            tableData={renderFilteredRows()}
            headComponent={sapHeadCell}
          />
        </div>
      </div>

      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <div className={style.modal}>
            {popupType === 'activatePromoCode' && (
              <ActivatePromoCodePopup onClick={usePromo} />
            )}
            {popupType === 'subscription' && (
              <PaymentPopup onClick={makeSubscribe} />
            )}
          </div>
        </ModalPopup>
      )}
    </div>
  );
};

export default Subscription;
