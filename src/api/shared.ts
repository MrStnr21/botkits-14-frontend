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
    profile: sharedAccessData.profile,
    dasboard: sharedAccessData.dasboard,
    botBuilder: sharedAccessData.botBuilder,
    mailing: sharedAccessData.mailing,
    static: sharedAccessData.static,
  };
  return patchReq({
    uri: `profiles/shared/${sharedAccessData.id}`,
    data,
  });
};

export { getSharedAccesses, postSharedAccess, patchSharedAccess };
