/* eslint-disable import/prefer-default-export */
import { TSubscriptionData } from '../services/types/subscription';
import { getReq, patchReq, postReq } from './api';

function getSubscriptions() {
  return getReq<TSubscriptionData>({
    uri: 'subscriptions',
    auth: true,
  });
}

function makeSubscription(id: string) {
  return postReq({
    uri: `subscriptions/${id}`,
    auth: true,
    data: {
      cardMask: '**** **** **** ****',
      debitDate: new Date().toISOString(),
    },
  });
}

function toggleSubscriptionStatus(status: boolean) {
  return postReq({
    uri: `subscriptions/activate`,
    auth: true,
    data: {
      status,
    },
  });
}

function activatePromocode(code: string) {
  return patchReq({
    uri: `promocodes/promocode?code=${code}`,
    auth: true,
  });
}

export {
  getSubscriptions,
  activatePromocode,
  makeSubscription,
  toggleSubscriptionStatus,
};
