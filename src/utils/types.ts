import { IconName } from '../ui/icon/utils';

export type IBot = {
  name: string;
  pages: boolean;
  botURI?: boolean;
};

export type TRowData = {
  taps?: string;
  regs?: string;
  sum?: string;
  fee?: string;
  paid?: string;
  withdrawal?: string;
  reqDate?: string;
  payDate?: string;
  document?: any;
  status?: boolean;
};

export type Option = {
  label: string;
  value: string;
  icon?: IconName;
};
