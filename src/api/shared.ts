import { TableData } from '../components/enhanced-table/enhanced-table';
import { getReq, patchReq, postReq } from './api';

const getSharedAccesses = () => {
  return getReq<TableData[]>({ uri: 'profiles/shared', auth: true });
};

const postSharedAccess = (sharedAccess: TableData) => {
  return postReq({ uri: 'profiles/shared', data: sharedAccess, auth: true });
};

const patchSharedAccess = (sharedAccessData: TableData) => {
  const data = {
    profile: sharedAccessData.id,
    dashboard: sharedAccessData.dashboard,
    botBuilder: sharedAccessData.botBuilder,
    mailing: sharedAccessData.mailing,
    statistics: sharedAccessData.statistics,

    /*  "profile": "65d0874b62a2669c8635d32f",
  "dashboard": true,
  "botBuilder": false,
  "mailing": true,
  "statistics": false */
  };
  return patchReq({
    uri: `profiles/shared`,
    data,
  });
};

export { getSharedAccesses, postSharedAccess, patchSharedAccess };
