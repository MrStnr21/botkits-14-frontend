import { TableData } from '../components/enhanced-table/enhanced-table';
import { getReq, postReq } from './api';

function getTariffs() {
  return getReq<TableData[]>({ uri: 'tariffs', auth: true });
}

function postTariff(tariff: TableData) {
  return postReq({ uri: 'tariffs', data: tariff, auth: true });
}

export { getTariffs, postTariff };
