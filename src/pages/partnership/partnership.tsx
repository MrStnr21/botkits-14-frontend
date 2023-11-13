/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';
import { ChangeEvent, FC, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { StyledEngineProvider, useMediaQuery } from '@mui/material';
import stylesPartnership from './partnership.module.scss';
import Input from '../../ui/inputs/input/input';
import Button from '../../ui/buttons/button/button';
import ButtonIconCopy from '../../ui/buttons/button-icon-copy/button-icon-copy';
import ChevronIcon from '../../components/icons/Chevron/ChevronIcon';
import TableComponent from '../../components/table-component/table-component';
import Typography from '../../ui/typography/typography';
import {
  paymentRows,
  refRows,
  refCols,
  paymentCols,
  cellStyle,
  rowStyleRef,
  rowStylePayment,
} from '../../utils/partnershipTable';
import { NUMBER_PARTNERSHIP } from '../../utils/config';

const Partnership: FC = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [isReferralsTableVisible, setReferralsTableVisible] = useState(true);
  const [isPaymentsTableVisible, setPaymentsTableVisible] = useState(false);
  const [paymentsChevronActive, setPaymentsChevronActive] = useState(false);
  const [refChevronActive, setRefChevronActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>(NUMBER_PARTNERSHIP!);

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
            <TableComponent
              columns={refCols}
              tableData={refRows}
              rowStyle={rowStyleRef}
              cellStyle={cellStyle}
            />

            {/* TODO Не очень понятно как с этим быть, пока закоментил */}
            {/* {isMobile && (
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
            )} */}
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
            {isPaymentsTableVisible && (
              <TableComponent
                columns={paymentCols}
                tableData={paymentRows}
                rowStyle={rowStylePayment}
                cellStyle={cellStyle}
              />
            )}
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
