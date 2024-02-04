/* eslint-disable import/prefer-default-export */
import { getReq } from './api';

function getSubscriptions() {
  return getReq<{ tariff: string }>({
    uri: 'subscriptions',
    auth: true,
  });
}

export { getSubscriptions };
