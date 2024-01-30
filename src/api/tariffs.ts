import { TableData } from '../components/enhanced-table/enhanced-table';
import { deleteReq, getReq, patchReq, postReq } from './api';

function getTariffs() {
  return getReq<TableData[]>({ uri: 'tariffs', auth: true });
}

function postTariff(tariff: TableData) {
  return postReq({ uri: 'tariffs', data: tariff, auth: true });
}

function patchTariff(tariff: TableData) {
  const data = {
    botsCount: Number(tariff.botsCount) || 1,
    duration: tariff.duration,
    name: tariff.name,
    price: Number(tariff.price) || 1,
    isStarted: tariff.isStarted,
    status: tariff.status,
    subscribersCount: Number(tariff.subscribersCount) || 1,
  };
  return patchReq({
    uri: `tariffs/${tariff.id}`,
    data,
  });
}

function deleteTariff(id: string) {
  return deleteReq({ uri: `tariffs/${id}`, auth: true });
}

export { getTariffs, postTariff, patchTariff, deleteTariff };
