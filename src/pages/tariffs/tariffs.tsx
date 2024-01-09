import { useState } from 'react';
import styles from './tariffs.module.scss';
import EnhancedTable from '../../components/enhanced-table/enhanced-table';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import { promoCellStyle, promoRowStyleRef } from '../share/promocodesConfig';
import { tariffsCols, tariffsRows } from '../share/tariffsConfig';
import TariffPopup from '../../components/popups/tariff-popup/tariff-popup';

function Tariffs() {
  const [popupOpened, togglePopup] = useState(false);
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
          tableData={tariffsRows}
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
