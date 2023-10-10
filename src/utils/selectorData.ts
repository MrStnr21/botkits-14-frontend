import { TStore } from '../services/types';

const signupSel = (store: TStore) => store.signup;
const signinSel = (store: TStore) => store.signin;
const resetPasswordSel = (store: TStore) => store.resetPassword;
const getUserInfoSel = (store: TStore) => store.getUserInfo;
const getBotsSel = (store: TStore) => store.getBots;
const addBotSel = (store: TStore) => store.addBot;

export {
  signupSel,
  signinSel,
  getBotsSel,
  addBotSel,
  getUserInfoSel,
  resetPasswordSel,
};
