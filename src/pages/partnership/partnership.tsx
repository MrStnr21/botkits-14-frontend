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
import TableComponent from '../subscription/table-component/table-component';
import Typography from '../../ui/typography/typography';

const headStyle = { border: 'none' };

const headCell = (data: string) => <Typography tag="h5">{data}</Typography>;

const baseCell = (data: string) => (
  <Typography className={stylesPartnership.text} tag="span">
    {data}
  </Typography>
);

const moneyCell = (data: string) => (
  <Typography className={stylesPartnership.text} tag="span">
    {`${data} ₽`}
  </Typography>
);

const refStatusCell = (status: boolean) => (
  <Typography
    className={cn(stylesPartnership.text, stylesPartnership.text_succsess)}
    tag="span"
  >
    Оплачено
  </Typography>
);

const paymentStatusCell = (status: boolean) => (
  <Typography
    className={cn(
      stylesPartnership.text,
      status
        ? stylesPartnership.text_succsess
        : stylesPartnership.text_processing
    )}
    tag="span"
  >
    {status ? 'Оплачено' : 'В обработке'}
  </Typography>
);

const refCols = [
  {
    key: 'taps',
    label: 'Перешли по ссылке',
    colHeadStyle: headStyle,
    cellComponent: baseCell,
  },
  {
    key: 'regs',
    label: 'Регистраций',
    colHeadStyle: headStyle,
    cellComponent: baseCell,
  },
  {
    key: 'status',
    label: 'Оплата',
    colHeadStyle: headStyle,
    cellComponent: refStatusCell,
  },
  {
    key: 'sum',
    label: 'Сумма',
    colHeadStyle: headStyle,
    cellComponent: moneyCell,
  },
  {
    key: 'fee',
    label: 'Комиссия',
    colHeadStyle: headStyle,
    cellComponent: moneyCell,
  },
  {
    key: 'paid',
    label: 'Выплачено',
    colHeadStyle: headStyle,
    cellComponent: moneyCell,
  },
  {
    key: 'withdrawal',
    label: 'Вывод',
    colHeadStyle: headStyle,
    cellComponent: moneyCell,
  },
];

const refRows = [
  {
    taps: '28 человек',
    regs: '15',
    status: true,
    sum: '5000',
    fee: '1500',
    paid: '4500',
    withdrawal: '1500',
  },
  {
    taps: '17 человек',
    regs: '8',
    status: true,
    sum: '15000',
    fee: '4500',
    paid: '8200',
    withdrawal: '4500',
  },
  {
    taps: '10 человек',
    regs: '8',
    status: true,
    sum: '8000',
    fee: '2000',
    paid: '6000',
    withdrawal: '2300',
  },
  {
    taps: '11 человек',
    regs: '5',
    status: true,
    sum: '500',
    fee: '100',
    paid: '300',
    withdrawal: '150',
  },
];

const paymentCols = [
  {
    key: 'reqDate',
    label: 'Дата запроса',
    colHeadStyle: headStyle,
    cellComponent: baseCell,
  },
  {
    key: 'payDate',
    label: 'Дата выплаты',
    colHeadStyle: headStyle,
    cellComponent: baseCell,
  },
  {
    key: 'document',
    label: 'Акт',
    colHeadStyle: headStyle,
    cellComponent: baseCell,
  },
  {
    key: 'status',
    label: 'Статус',
    colHeadStyle: headStyle,
    cellComponent: paymentStatusCell,
  },
  {
    key: 'sum',
    label: 'Сумма выплаты',
    colHeadStyle: headStyle,
    cellComponent: baseCell,
  },
];

const paymentRows = [
  {
    reqDate: '05.07.22',
    payDate: '07.07.22',
    document: 'Чек.pdf',
    status: true,
    sum: '1500 ₽',
  },
  {
    reqDate: '08.08.22',
    payDate: '-',
    document: 'Чек.pdf',
    status: false,
    sum: '3000 ₽',
  },
  {
    reqDate: '22.12.22',
    payDate: '13.01.23',
    document: 'Чек.pdf',
    status: true,
    sum: '2500 ₽',
  },
];

const Partnership: FC = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [isReferralsTableVisible, setReferralsTableVisible] = useState(true);
  const [isPaymentsTableVisible, setPaymentsTableVisible] = useState(false);
  const [paymentsChevronActive, setPaymentsChevronActive] = useState(false);
  const [refChevronActive, setRefChevronActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>('botkits.ru/?ref=12345');

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
            <Typography tag="h3">Cтатистика рефераллов</Typography>
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
              headComponent={headCell}
              tableData={refRows}
              cellStyle={{ border: 'none' }}
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
              <Typography tag="h3">Выплаты</Typography>
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
                headComponent={headCell}
                tableData={paymentRows}
                cellStyle={{ border: 'none' }}
              />
            )}
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default Partnership;
