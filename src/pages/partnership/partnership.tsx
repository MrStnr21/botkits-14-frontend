import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { StyledEngineProvider, useMediaQuery } from '@mui/material';
import cn from 'classnames';
import stylesPartnership from './partnership.module.scss';
import ReferralsTable from '../../components/tables/referrals-table/referrals-table';
import PaymentsTable from '../../components/tables/payments-table/payments-table';

import chevron from '../../images/icon/20x20/chevron/down.svg';

const Partnership: FC = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [isReferralsTableVisible, setReferralsTableVisible] = useState(true);
  const [isPaymentsTableVisible, setPaymentsTableVisible] = useState(false);

  const chevronClassName = cn(
    stylesPartnership.chevron,
    isPaymentsTableVisible && stylesPartnership.chevron_active
  );

  const toggleFirstTable = () => {
    setReferralsTableVisible(!isReferralsTableVisible);
    setPaymentsTableVisible(!isPaymentsTableVisible);
  };

  const toggleSecondTable = () => {
    setPaymentsTableVisible(!isPaymentsTableVisible);
    if (!isMobile) {
      setReferralsTableVisible(true);
    } else {
      setReferralsTableVisible(false);
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className={stylesPartnership.partnershipLayout}>
        <div className={stylesPartnership.referralsTableContainer}>
          <div className={stylesPartnership.headContainer}>
            <h2 className={stylesPartnership.title}>Cтатистика рефераллов</h2>
            {isMobile && (
              <button
                type="button"
                onClick={toggleFirstTable}
                className={chevronClassName}
              >
                <ReactSVG src={chevron} />
              </button>
            )}
          </div>
          {isReferralsTableVisible && <ReferralsTable />}
        </div>
        <div className={stylesPartnership.paymentsTableContainer}>
          <div className={stylesPartnership.headContainer}>
            <h2 className={stylesPartnership.title}>Выплаты</h2>
            <button
              type="button"
              onClick={toggleSecondTable}
              className={chevronClassName}
            >
              <ReactSVG src={chevron} />
            </button>
          </div>
          {isPaymentsTableVisible && <PaymentsTable />}
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
