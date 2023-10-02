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
          <ReferralsTable />
          <PaymentsTable onClick={toggleSecondTable} />
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
