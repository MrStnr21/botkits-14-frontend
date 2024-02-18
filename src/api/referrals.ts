/* eslint-disable import/prefer-default-export */
import { getReq } from './api';

export function getReferrals() {
  return getReq({ uri: 'partnership/statistic', auth: true });
}
