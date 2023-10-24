/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, MouseEvent } from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import MenuSimple from '../../ui/menus/menu-simple/menu-simple';
import { rows, PaymentTable } from './payment-table/payment-table';
import icon from '../../images/icon/20x20/chevron/down.svg';
import TableComponent from './table/table-component';
import style from './subscription.module.scss';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import ActivatePromoCodePopup from '../../components/popups/activate-promo-code-popup/activate-promo-code-popup';
import useModal from '../../services/hooks/use-modal';
import PaymentPopup from '../../components/popups/payment-popup/payment-popup';

const columns = [
  {
    key: 'date',
    value: 'Дата',
  },
  {
    key: 'amount',
    value: 'Сумма',
  },
  {
    key: 'operation',
    value: 'Операция',
  },
  {
    key: 'note',
    value: 'Примечание',
  },
  {
    key: 'successful',
    value: 'Статус',
  },
];

export const tableData = [
  {
    date: '2023-09-17T14:08:39.904Z',
    amount: 1000,
    successful: true,
    operation: 'Списания',
    note: 'Пополнение счета',
  },
  {
    date: '2022-03-09T11:22:33.456Z',
    amount: 523,
    successful: false,
    operation: 'Поступления',
    note: 'Оплата услуг',
  },
  {
    date: '2022-06-15T14:30:45.789Z',
    amount: 275,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
  {
    date: '2022-08-20T09:05:12.345Z',
    amount: 789,
    successful: true,
    operation: 'Поступления',
    note: '',
  },
  {
    date: '2023-01-05T16:45:30.678Z',
    amount: 432,
    successful: false,
    operation: 'Списания',
    note: 'Оплата услуг',
  },
  {
    date: '2022-10-12T12:15:00.123Z',
    amount: 600,
    successful: true,
    operation: 'Поступления',
    note: 'Возврат средств',
  },
];

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
  const [rowList, setRowList] = useState(rows);

  const click = () => {
    setActiveList(!activeList);
  };

  const filteredRows = (filterName: string): void => {
    setRowList(() => {
      if (filterName === 'Все') {
        return rows;
      }
      return rows.filter((row) => row.operation === filterName);
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
          <div className={style.subscription}>
            <div className={style.subscription__header}>
              <Typography tag="h3" className={style.subscription__rate}>
                Тариф
              </Typography>
              <Typography tag="h4" className={style.subscription__status}>
                Статус
              </Typography>
              <Typography tag="p" className={style.subscription__info}>
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
                <Typography tag="h3">{`${0}₽`}</Typography>
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
        <div className={style.payment}>
          {/* TODO Раскомментировать строки 148 - 167 */}
          {/* <div className={style.payment__header}>
            <Typography tag="h4">История платежей</Typography>
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
          </div> */}
          {/* <PaymentTable tableData={rowList} /> */}
          <TableComponent columns={columns} tableData={tableData} />
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
