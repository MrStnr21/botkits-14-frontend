/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { StyledEngineProvider, useMediaQuery } from '@mui/material';
import stylesPartnership from './partnership.module.scss';
import Input from '../../ui/inputs/input/input';
import Button from '../../ui/buttons/button/button';
import ButtonIconCopy from '../../ui/buttons/button-icon-copy/button-icon-copy';
import ChevronIcon from '../../ui/icons/Chevron/ChevronIcon';
import EnhancedTable from '../../components/enhanced-table/enhanced-table';
import Typography from '../../ui/typography/typography';
import {
  paymentRows,
  refRows,
  refCols,
  paymentCols,
  cellStyle,
  rowStyleRef,
  rowStylePayment,
  cellStyleMobile,
  rowStyleMobile,
} from './partnershipConfig';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import { BASE_URL } from '../../utils/config';
import { getUserInfoSel } from '../../utils/selectorData';
import { useAppSelector } from '../../services/hooks/hooks';
import { getReferrals } from '../../api/referrals';
import EnhancedTableMobile from '../../components/enhanced-table/enhanced-table-mobile';

const Partnership: FC = (): JSX.Element => {
  const { user } = useAppSelector(getUserInfoSel);
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [isReferralsTableVisible, setReferralsTableVisible] = useState(true);
  const [isPaymentsTableVisible, setPaymentsTableVisible] = useState(false);
  const [paymentsChevronActive, setPaymentsChevronActive] = useState(false);
  const [refChevronActive, setRefChevronActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setInputValue(`${BASE_URL}/partnership?${user?.partner_ref}` || '');
    // Получение статистики
    getReferrals();
  }, [user]);

  const toggleReferralsTable = () => {
    setReferralsTableVisible(!isReferralsTableVisible);
    setPaymentsTableVisible(false);
    setRefChevronActive(!refChevronActive);
    setPaymentsChevronActive(false);
  };

  const togglePaymentsTable = () => {
    setPaymentsTableVisible(!isPaymentsTableVisible);
    setReferralsTableVisible(true);
    setPaymentsChevronActive(!paymentsChevronActive);
    setRefChevronActive(false);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className={stylesPartnership.partnership}>
        <div className={stylesPartnership.partnership__wrapper}>
          <div>
            <Typography
              tag="h2"
              fontFamily="secondary"
              className={stylesPartnership.partnership__title}
            >
              Партнерская программа
            </Typography>
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
              <Typography
                tag="h3"
                fontFamily="secondary"
                className={stylesPartnership.tables__title}
              >
                Cтатистика рефераллов
              </Typography>
            </div>

            {/* TODO Не очень понятно как с этим быть, пока закоментил */}
            {/* {isMobile && (
                <button
                  type="button"
                  onClick={toggleReferralsTable}
                  className={stylesPartnership.tables__chevron}
                >
                  <ChevronIcon
                    color="#a6b3c9"
                    width={24}
                    height={24}
                    position={refChevronActive ? 'up' : 'down'}
                  />
                </button>
              )} */}
            {!isMobile ? (
              <EnhancedTable
                columns={refCols}
                headComponent={ppHeadCell}
                tableData={refRows}
                rowStyle={rowStyleRef}
                cellStyle={cellStyle}
              />
            ) : (
              <EnhancedTableMobile
                columns={refCols}
                headComponent={ppHeadCell}
                tableData={refRows}
                rowStyle={rowStyleMobile}
                cellStyle={cellStyleMobile}
              />
            )}

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
              <Typography
                tag="h3"
                fontFamily="secondary"
                className={stylesPartnership.tables__title}
              >
                Выплаты
              </Typography>
              <button
                type="button"
                onClick={togglePaymentsTable}
                className={stylesPartnership.tables__chevron}
              >
                {isMobile ? (
                  <ChevronIcon
                    color="#a6b3c9"
                    width={24}
                    height={24}
                    position={paymentsChevronActive ? 'up' : 'down'}
                  />
                ) : (
                  <ChevronIcon
                    width={24}
                    height={24}
                    position={paymentsChevronActive ? 'up' : 'down'}
                  />
                )}
              </button>
            </div>
            {isPaymentsTableVisible &&
              (!isMobile ? (
                <EnhancedTable
                  columns={paymentCols}
                  headComponent={ppHeadCell}
                  tableData={paymentRows}
                  rowStyle={rowStylePayment}
                  cellStyle={cellStyle}
                />
              ) : (
                <EnhancedTableMobile
                  columns={paymentCols}
                  headComponent={ppHeadCell}
                  tableData={paymentRows}
                  rowStyle={rowStylePayment}
                  cellStyle={cellStyle}
                />
              ))}
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
