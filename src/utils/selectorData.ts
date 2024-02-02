import { TStore } from '../services/types';

const signupSel = (store: TStore) => store.signup;
const signinSel = (store: TStore) => store.signin;
const resetPasswordSel = (store: TStore) => store.resetPassword;
const getUserInfoSel = (store: TStore) => store.getUserInfo;
const botsSel = (store: TStore) => store.bots;
const mailingsSel = (store: TStore) => store.mailings;
const getTemplatesBotsSel = (store: TStore) => store.getTemplatesBots;
const getPlatformsSel = (store: TStore) => store.getPlatforms;
const getErrorsSel = (store: TStore) => store.errors;

export {
  signupSel,
  signinSel,
  botsSel,
  getUserInfoSel,
  resetPasswordSel,
  getTemplatesBotsSel,
  getPlatformsSel,
  getErrorsSel,
  mailingsSel,
};
