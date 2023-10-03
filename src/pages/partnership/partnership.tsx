import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { StyledEngineProvider } from '@mui/material';
import cn from 'classnames';
import stylesPartnership from './partnership.module.scss';
import ReferralsTable from '../../components/tables/referrals-table/referrals-table';
import PaymentsTable from '../../components/tables/payments-table/payments-table';

import chevron from '../../images/icon/20x20/chevron/down.svg';

const Partnership: FC = (): JSX.Element => {
  const [isTableVisible, setTableVisible] = useState(false);

  const chevronClassName = cn(
    stylesPartnership.chevron,
    isTableVisible && stylesPartnership.chevron_active
  );

  const toggleSecondTable = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className={stylesPartnership.partnershipLayout}>
        <div className={stylesPartnership.referralsTableContainer}>
          <div className={stylesPartnership.headContainer}>
            <h2 className={stylesPartnership.heading}>Cтатистика рефераллов</h2>
          </div>
          <ReferralsTable />
        </div>
        <div className={stylesPartnership.paymentsTableContainer}>
          <div className={stylesPartnership.headContainer}>
            <h2 className={stylesPartnership.heading}>Выплаты</h2>
            <button
              type="button"
              onClick={toggleSecondTable}
              className={chevronClassName}
            >
              <ReactSVG src={chevron} />
            </button>
          </div>
          {isTableVisible && <PaymentsTable />}
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
