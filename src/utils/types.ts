export type IBot = {
  name: string;
  stepFirst: 'default' | 'upload';
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
