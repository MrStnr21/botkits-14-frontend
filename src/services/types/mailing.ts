import { Descendant } from 'slate';
import { TBot } from './bot';
import { TPlatform } from './platform';

export type TMailing = {
  _id: string;
  name: string;
  message: string;
  bot: TBot;
  platforms: Array<TPlatform>;
  countSuccesesMailing: number;
  conversion: number;
  isActive: boolean;
  isActibeBotBuilder: boolean;
};

type TSchedule = {
  isNow: boolean;
  date?: {
    date: string;
    time: number;
    timezone: string;
  };
  repeat?: string;
  isRepeat: boolean;
};

export type TFormData = {
  name: string;
  message: Descendant[];
  bot: string;
  attachments?: [];
  platforms: string[];
  isActiveBotBuilder: boolean;
  isActive: boolean;
  schedule: TSchedule;
};

export interface IGetMailingsResponse extends Array<TMailing> {}
export interface ICreateMailingResponse extends TMailing {}
