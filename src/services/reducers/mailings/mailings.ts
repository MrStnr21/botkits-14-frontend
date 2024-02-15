/* eslint-disable import/no-cycle */
import {
  GETMAILINGS_REQUEST,
  GETMAILINGS_SUCCESS,
  GETMAILINGS_ERROR,
  TGetMailingsActions,
} from '../../actions/mailing/getMailings';

import {
  CREATE_MAILING_REQUEST,
  CREATE_MAILING_SUCCESS,
  CREATE_MAILING_ERROR,
  TCreateMailingActions,
} from '../../actions/mailing/createMailing';

import { TMailing } from '../../types/mailing';

export type TMailingsState = {
  mailings: TMailing[];

  mailingsRequest: boolean;
  mailingsSuccess: boolean;
  mailingsError: boolean;
};

const mailingsInitialState: TMailingsState = {
  mailings: [],

  mailingsRequest: false,
  mailingsSuccess: false,
  mailingsError: false,
};

function mailingsReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = mailingsInitialState,
  action: TGetMailingsActions | TCreateMailingActions
) {
  switch (action.type) {
    case GETMAILINGS_REQUEST: {
      return {
        ...state,
        mailingsRequest: true,
        mailingsError: false,
      };
    }
    case GETMAILINGS_SUCCESS: {
      return {
        ...state,
        mailings: action.mailings,
        mailingsSuccess: true,
        mailingsRequest: false,
      };
    }
    case GETMAILINGS_ERROR: {
      return {
        ...state,
        mailingsRequest: false,
        mailingsError: true,
      };
    }
    case CREATE_MAILING_REQUEST: {
      return {
        ...state,
        mailingsRequest: true,
        mailingsError: false,
      };
    }
    case CREATE_MAILING_SUCCESS: {
      return {
        ...state,
        mailings: [...state.mailings, action.mailing],
        mailingsSuccess: true,
        mailingsRequest: false,
      };
    }
    case CREATE_MAILING_ERROR: {
      return {
        ...state,
        mailingsRequest: false,
        mailingsError: true,
      };
    }
    default: {
      return state;
    }
  }
}

export { mailingsReducer };
