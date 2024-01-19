import { TableData } from '../components/enhanced-table/enhanced-table';
import { getReq, postReq } from './api';

const getSharedAccesses = () => {
  return getReq<TableData[]>({ uri: 'profiles/shared', auth: true });
};

const postSharedAccess = (sharedAccess: TableData) => {
  return postReq({ uri: 'profiles/shared', data: sharedAccess, auth: true });
};

export { getSharedAccesses, postSharedAccess };
