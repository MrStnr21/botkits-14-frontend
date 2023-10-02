import { FC, useState } from 'react';

import { StyledEngineProvider } from '@mui/material';
import stylesPartnership from './partnership.module.scss';
import ReferralsTable from '../../components/tables/referrals-table/referrals-table';
import PaymentsTable from '../../components/tables/payments-table/payments-table';

const Partnership: FC = (): JSX.Element => {
  const [isTableVisible, setTableVisible] = useState(false);

  const toggleSecondTable = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className={stylesPartnership.partnershipLayout}>
        <div className={stylesPartnership.tableContainer}>
          {/* <div className={stylesPartnership.referralsHeader}>
            <h2 className={stylesPartnership.heading}>Cтатистика рефераллов</h2>
          </div> */}
          <ReferralsTable />
        </div>
        <div className={stylesPartnership.tableContainer}>
          <div className={stylesPartnership.headContainer}>
            <h2 className={stylesPartnership.heading}>Выплаты</h2>
            <button onClick={toggleSecondTable} type="button">
              Кнопка
            </button>
          </div>
          {isTableVisible && <PaymentsTable />}
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
