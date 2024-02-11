import { TProfile } from './user';

export type TSubscriptionData = {
  balance: number;
  cardMask: string;
  debitDate: string;
  status: boolean;
  payments: TSubscriptionPayment[];
  tariff: any;
};

export type TSubscriptionPayment = {
  date: string;
  amount: number;
  note: string;
  operation: string;
  profile: TProfile;
  successful: boolean;
  tariff: any;
};
