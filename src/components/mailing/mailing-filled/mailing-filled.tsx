/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import styles from './mailing-filled.module.scss';
import EnhancedTable from '../../enhanced-table/enhanced-table';
import { cols, rows, rowStyle, cellStyle } from '../../../utils/mailingTable';
import { ppHeadCell } from '../../table-cells/table-cells';
import Typography from '../../../ui/typography/typography';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import MobileTable from './mobile-table/mobile-table';

const MailingFilled: FC = () => {
  const isMobile = useMediaQuery('(max-width: 860px)');

  return (
    <div className={styles.table}>
      <div className={styles.table__titleContainer}>
        <Typography
          tag="h3"
          fontFamily="secondary"
          className={styles.table__title}
        >
          Мои рассылки
        </Typography>
        {/* <MailingModal caption="Все" elements={mailings} /> */}
        <button type="button" className={styles.table__button}>
          Все <ChevronIcon color="#8392AB" width={26} height={26} />
        </button>
      </div>
      <div>
        {isMobile ? (
          <MobileTable data={rows} />
        ) : (
          <EnhancedTable
            columns={cols}
            headComponent={ppHeadCell}
            tableData={rows}
            rowStyle={rowStyle}
            cellStyle={cellStyle}
          />
        )}
      </div>
    </div>
  );
};

export default MailingFilled;
