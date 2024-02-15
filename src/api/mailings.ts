import { getReq, postReq } from './api';

import {
  ICreateMailingResponse,
  IGetMailingsResponse,
  TFormData,
} from '../services/types/mailing';

function getMailingsApi(botId: string) {
  return getReq<IGetMailingsResponse>({
    uri: `mailing/bot/${botId}`,
    auth: true,
  });
}

function createMailingApi(mailingData: TFormData) {
  return postReq<ICreateMailingResponse>({
    uri: 'mailing',
    auth: true,
    data: mailingData,
  });
}

export { getMailingsApi, createMailingApi };
