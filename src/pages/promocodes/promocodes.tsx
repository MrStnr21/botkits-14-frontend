/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useState } from 'react';
import styles from './promocodes.module.scss';
import Typography from '../../ui/typography/typography';
import EnhancedTable, {
  TableData,
} from '../../components/enhanced-table/enhanced-table';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import {
  promoCellStyle,
  promoColumns,
  promoDropdownValues,
  promoHeaderTitle,
  promoRowStyleRef,
  promoTableModalButtons,
} from './promocodesConfig';
import {
  deletePromo,
  getPromocodes,
  patchPromocode,
} from '../../api/promocodes';
import Button from '../../ui/buttons/button/button';
import AddPromoPopup from '../../components/popups/add-promo-popup/add-promo-popup';

const dateFormat = new Intl.DateTimeFormat('ru', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
});

const Promocodes: FC = (): JSX.Element => {
  const [data, setData] = useState<TableData[]>([]);
  const [filterValue, setFilterValue] = useState<string>('all');
  const [popupOpened, togglePopup] = useState(false);

  useEffect(() => {
    getPromocodes().then((d) => {
      setData(
        d.map((item) => {
          const newDate = dateFormat.format(new Date(item.actionPeriod));
          return {
            ...item,
            formatedDate: newDate,
            id: item._id,
          };
        })
      );
    });
  }, [popupOpened]);

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  const renderFilteredRows = () => {
    switch (filterValue) {
      case 'all':
        return data;
      case 'inactive':
        return data!.filter((row) => row.status === false);
      case 'active':
        return data!.filter((row) => row.status === true);
      default:
        return data;
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={styles.page__heading}
          >
            Промокоды
          </Typography>
          <div className={styles.button}>
            <Button
              color="green"
              variant="default"
              onClick={() => togglePopup(true)}
            >
              Добавить промокод
            </Button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.promocodeTable}>
            <EnhancedTable
              check
              header
              dropdown
              columns={promoColumns}
              headComponent={ppHeadCell}
              tableData={renderFilteredRows()}
              rowStyle={promoRowStyleRef}
              cellStyle={promoCellStyle}
              shadow={0}
              onFilterChange={handleFilterChange}
              menuOptions={promoTableModalButtons}
              tableHeaderTitle={promoHeaderTitle}
              headerOptions={promoDropdownValues}
              onUpdate={patchPromocode}
              setTableData={setData}
              onDelete={deletePromo}
            />
          </div>
        </div>
      </div>
      {popupOpened && <AddPromoPopup closePopup={() => togglePopup(false)} />}
    </>
  );
};

export default Promocodes;
