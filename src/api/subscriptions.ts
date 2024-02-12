/* eslint-disable import/prefer-default-export */
import { getReq } from './api';

function getSubscriptions() {
  return getReq<{ tariff: { name: string } }>({
    uri: 'subscriptions',
    auth: true,
  });
}

export { getSubscriptions };
