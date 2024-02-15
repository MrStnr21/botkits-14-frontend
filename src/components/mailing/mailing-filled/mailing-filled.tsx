/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import styles from './mailing-filled.module.scss';
import EnhancedTable from '../../enhanced-table/enhanced-table';
import { cols, rows, rowStyle, cellStyle } from '../../../utils/mailingTable';
import { ppHeadCell } from '../../table-cells/table-cells';
import Typography from '../../../ui/typography/typography';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import MobileTable from './mobile-table/mobile-table';
import { TMailing } from '../../../services/types/mailing';
import { TPlatform } from '../../../services/types/platform';

type IMailingFilled = {
  mailings: Array<TMailing>;
};

type TData = {
  id: string;
  title: string;
  messenger: string;
  messages: string;
  conversion: string;
  status: boolean;
};

const MailingFilled: FC<IMailingFilled> = ({ mailings }) => {
  const isMobile = useMediaQuery('(max-width: 860px)');

  useEffect(() => {
    console.log(mailings);
  }, []);

  const getMessagersTitle = (messagers: TPlatform[]) => {
    const titles: string[] = [];
    messagers.forEach((messager) => {
      titles.push(messager.title);
    });

    return titles.join(', ');
  };

  const createRows = (): TData[] => {
    const data: TData[] = [];
    mailings.forEach((mailing) => {
      data.push({
        // eslint-disable-next-line no-underscore-dangle
        id: mailing._id,
        title: mailing.name,
        messenger: getMessagersTitle(mailing.platforms),
        messages: `${mailing.countSuccesesMailing} сообщений`,
        conversion: `${mailing.conversion}%`,
        status: mailing.isActive,
      });
    });
    return data;
  };

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
          <MobileTable data={createRows()} />
        ) : (
          <EnhancedTable
            columns={cols}
            headComponent={ppHeadCell}
            tableData={createRows()}
            rowStyle={rowStyle}
            cellStyle={cellStyle}
          />
        )}
      </div>
    </div>
  );
};

export default MailingFilled;
