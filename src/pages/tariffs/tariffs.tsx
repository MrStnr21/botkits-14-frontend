import { useState, useEffect } from 'react';
import styles from './tariffs.module.scss';
import EnhancedTable, {
  TableData,
} from '../../components/enhanced-table/enhanced-table';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import { promoCellStyle, promoRowStyleRef } from '../share/promocodesConfig';
import { tariffsCols } from '../share/tariffsConfig';
import TariffPopup from '../../components/popups/tariff-popup/tariff-popup';
import { getTariffs } from '../../api/tariffs';

function Tariffs() {
  const [popupOpened, togglePopup] = useState(false);
  const [tariffs, setTariffs] = useState<TableData[]>([]);

  useEffect(() => {
    getTariffs().then((data) => {
      // eslint-disable-next-line no-underscore-dangle
      setTariffs(data.map((item) => ({ ...item, id: item._id })));
    });
  }, [popupOpened]);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <Typography tag="h2">Тарифы</Typography>
          </div>
          <div className={styles.button}>
            <Button
              color="green"
              variant="default"
              onClick={() => togglePopup(true)}
            >
              Добавить тариф
            </Button>
          </div>
        </div>
        <EnhancedTable
          check
          toolbar
          toolbarFilters
          columns={tariffsCols}
          headComponent={ppHeadCell}
          tableData={tariffs}
          rowStyle={promoRowStyleRef}
          cellStyle={promoCellStyle}
          shadow={1}
          pagination
        />
      </div>
      {popupOpened && <TariffPopup closePopup={() => togglePopup(false)} />}
    </>
  );
}

export default Tariffs;
