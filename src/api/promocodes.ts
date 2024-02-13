/* eslint-disable no-underscore-dangle */
import { TableData } from '../components/enhanced-table/enhanced-table';
import { TPromocode } from '../services/types/promocodes';
import { deleteReq, getReq, patchReq, postReq } from './api';

function getPromocodes() {
  return getReq<TPromocode[]>({
    uri: 'promocodes',
    auth: true,
  });
}

function postPromocode(promocode: any) {
  return postReq({
    uri: 'promocodes',
    auth: true,
    data: promocode,
  });
}

function patchPromocode(promocode: TableData) {
  const data = {
    code: promocode.code,
    actionPeriod: promocode.actionPeriod,
    activationCount: Number(promocode.activationCount),
    maxActivationCount: Number(promocode.maxActivationCount),
    amount: Number(promocode.amount),
    status: promocode.status,
  };
  return patchReq({
    uri: `promocodes/${promocode._id}`,
    auth: true,
    data,
  });
}

function deletePromo(id: string) {
  return deleteReq({ uri: `promocodes/${id}`, auth: true });
}

export { getPromocodes, postPromocode, patchPromocode, deletePromo };
