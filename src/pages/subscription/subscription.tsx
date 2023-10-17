import { FC, useState, MouseEvent } from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';
import Typography from '../../ui/typography/typography';
import MenuSimple from '../../ui/menus/menu-simple/menu-simple';
import { rows, PaymentTable } from './payment-table/payment-table';
import icon from '../../images/icon/20x20/chevron/down.svg';
import style from './subscription.module.scss';

const Subscription: FC = (): JSX.Element => {
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
          balance
        </div>
        <div className={style.payment}>
          <div className={style.payment__header}>
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
          </div>
          <PaymentTable tableData={rowList} />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
