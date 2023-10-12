const refCols = [
  'Перешли по ссылке',
  'Регистраций',
  'Оплата',
  'Сумма',
  'Комиссия',
  'Выплачено',
  'Вывод',
];
const paymentCols = [
  'Дата запроса',
  'Дата выплаты',
  'Акт',
  'Статус',
  'Сумма выплаты',
];
const refRows = [
  {
    taps: '28 человек',
    regs: '15',
    status: true,
    sum: '5000 ₽',
    fee: '1500 ₽',
    paid: '4500 ₽',
    withdrawal: '1500 ₽',
  },
  {
    taps: '17 человек',
    regs: '8',
    status: true,
    sum: '15000 ₽',
    fee: '4500 ₽',
    paid: '8200 ₽',
    withdrawal: '4500 ₽',
  },
  {
    taps: '10 человек',
    regs: '8',
    status: true,
    sum: '8000 ₽',
    fee: '2000 ₽',
    paid: '6000 ₽',
    withdrawal: '2300 ₽',
  },
  {
    taps: '11 человек',
    regs: '5',
    status: true,
    sum: '500 ₽',
    fee: '100 ₽',
    paid: '300 ₽',
    withdrawal: '150 ₽',
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

export { refCols, refRows, paymentCols, paymentRows };
