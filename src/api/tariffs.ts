import { TableData } from '../components/enhanced-table/enhanced-table';
import { getReq, patchReq, postReq } from './api';

function getTariffs() {
  return getReq<TableData[]>({ uri: 'tariffs', auth: true });
}

function postTariff(tariff: TableData) {
  return postReq({ uri: 'tariffs', data: tariff, auth: true });
}

function patchTariff(tariff: TableData) {
  const data = {
    botsCount: Number(tariff.botsCount),
    duration: tariff.duration,
    name: tariff.name,
    price: Number(tariff.price),
    isStarted: tariff.isStarted,
    status: tariff.status,
    subscribersCount: Number(tariff.subscribersCount),
  };
  return patchReq({
    uri: `tariffs/${tariff.id}`,
    data,
  });
}

export { getTariffs, postTariff, patchTariff };
