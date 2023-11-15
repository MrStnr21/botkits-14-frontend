import { FC, useState, MouseEvent } from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import MenuSimple from '../../ui/menus/menu-simple/menu-simple';
import icon from '../../images/icon/20x20/chevron/down.svg';
import TableComponent from '../../components/table-component/table-component';
import style from './subscription.module.scss';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import ActivatePromoCodePopup from '../../components/popups/activate-promo-code-popup/activate-promo-code-popup';
import useModal from '../../services/hooks/use-modal';
import PaymentPopup from '../../components/popups/payment-popup/payment-popup';
import {
  tableData,
  columns,
  cellStyle,
  rowStyle,
  subscriptionStatus,
} from '../../utils/paymenTable';
import { sapHeadCell } from '../../components/table-cells/table-cells';

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

  const buttonList = ['Все', 'Списания', 'Поступления'];
  const [activeList, setActiveList] = useState(false);
  const [buttonName, setButtonName] = useState('Все');
  const [rowList, setRowList] = useState(tableData);

  const click = () => {
    setActiveList(!activeList);
  };

  const filteredRows = (filterName: string): void => {
    setRowList(() => {
      if (filterName === 'Все') {
        return tableData;
      }
      return tableData.filter((row) => row.operation === filterName);
    });
  };

  const setActiveFilter = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setButtonName(target.textContent as string);
    filteredRows(target.textContent as string);
    setActiveList(!activeList);
  };

  return (
    <div className={style.container}>
      <div className={style.container__item}>
        <Typography tag="h2">Подписка и платежи</Typography>
        <div className={style.subscription}>
          <div className={style.subscription__header}>
            <Typography tag="h3" className={style.subscription__rate}>
              {subscriptionStatus.tariff}
            </Typography>
            <Typography
              tag="h4"
              className={cn(
                style.subscription__status,
                style.text,
                subscriptionStatus.status
                  ? style.text_succsess
                  : style.text_failure
              )}
            >
              {subscriptionStatus.status ? 'активен' : 'неактивен'}
            </Typography>
            <Typography tag="span" className={style.subscription__info}>
              Инфо
            </Typography>
            <div className={style.subscription__button}>
              <Button
                variant="default"
                color="green"
                onClick={() => handleActivateSubscription('subscription')}
              >
                Активировать подписку
              </Button>
            </div>
          </div>
          <div className={style.subscription__body}>
            <div className={style.subscription__balance}>
              <Typography tag="p">Баланс</Typography>
              <Typography tag="h3">{`${subscriptionStatus.balance}₽`}</Typography>
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
          <div className={style.payment__header}>
            <Typography tag="h4" fontFamily="secondary">
              История платежей
            </Typography>
            <div className={style.dropdown}>
              <button
                type="button"
                onClick={click}
                className={style.dropdown__button}
              >
                {buttonName}
                <ReactSVG src={icon} style={{ height: '20px' }} />
              </button>
              <MenuSimple
                buttons={buttonList}
                isActive={activeList}
                onClick={setActiveFilter}
                className={style.dropdown__list}
              />
            </div>
          </div>
          <TableComponent
            cellStyle={cellStyle}
            rowStyle={rowStyle}
            columns={columns}
            tableData={rowList}
            headComponent={sapHeadCell}
          />
        </div>
      </div>

      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <div className={style.modal}>
            {popupType === 'activatePromoCode' && <ActivatePromoCodePopup />}
            {popupType === 'subscription' && <PaymentPopup />}
          </div>
        </ModalPopup>
      )}
    </div>
  );
};

export default Subscription;
