import { ChangeEvent, FC, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { StyledEngineProvider, useMediaQuery } from '@mui/material';
import cn from 'classnames';
import stylesPartnership from './partnership.module.scss';
import ReferralsTable from './referrals-table/referrals-table';
import PaymentsTable from './payments-table/payments-table';
import Input from '../../ui/inputs/input/input';
import Button from '../../ui/buttons/button/button';
import ButtonIconCopy from '../../ui/buttons/button-icon-copy/button-icon-copy';
import chevron from '../../images/icon/20x20/chevron/down.svg';

const Partnership: FC = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [isReferralsTableVisible, setReferralsTableVisible] = useState(true);
  const [isPaymentsTableVisible, setPaymentsTableVisible] = useState(false);
  const [inputValue, setInputValue] = useState<string>('botkits.ru/?ref=12345');

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
      <div className={stylesPartnership.partnership}>
        <div className={stylesPartnership.partnership__wrapper}>
          <div>
            <h2 className={stylesPartnership.partnership__title}>
              Партнерская программа
            </h2>
            <div className={stylesPartnership.partnership__inputContainer}>
              <div className={stylesPartnership.partnership__inputWrapper}>
                <Input
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                  value={inputValue}
                  styled="main"
                  textColor="blue"
                />
              </div>
              <CopyToClipboard text={inputValue}>
                <ButtonIconCopy />
              </CopyToClipboard>
            </div>
          </div>
          {!isMobile && (
            <div className={stylesPartnership.partnership__buttonWrapper}>
              <Button
                variant="default"
                size="small"
                color="green"
                buttonHtmlType="submit"
              >
                Запросить выплату
              </Button>
            </div>
          )}
        </div>
        <div className={stylesPartnership.tables}>
          <div className={stylesPartnership.tables__referrals}>
            <div className={stylesPartnership.tables__titleContainer}>
              <h2 className={stylesPartnership.tables__title}>
                Cтатистика рефераллов
              </h2>
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
            {isMobile && (
              <div className={stylesPartnership.partnership__buttonWrapper}>
                <Button
                  variant="default"
                  size="small"
                  color="green"
                  buttonHtmlType="submit"
                >
                  Запросить выплату
                </Button>
              </div>
            )}
          </div>
          <div className={stylesPartnership.tables__payments}>
            <div className={stylesPartnership.tables__titleContainer}>
              <h2 className={stylesPartnership.tables__title}>Выплаты</h2>
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
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
