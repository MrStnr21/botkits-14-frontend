import { TRootState } from '../services/types';

const signupSel = (store: TRootState) => store.signup;
const signinSel = (store: TRootState) => store.signin;
const resetPasswordSel = (store: TRootState) => store.resetPassword;
const getUserInfoSel = (store: TRootState) => store.getUserInfo;
const botsSel = (store: TRootState) => store.bots;
const getTemplatesBotsSel = (store: TRootState) => store.getTemplatesBots;
const getPlatformsSel = (store: TRootState) => store.getPlatforms;
const getErrorsSel = (store: TRootState) => store.errors;

export {
  signupSel,
  signinSel,
  botsSel,
  getUserInfoSel,
  resetPasswordSel,
  getTemplatesBotsSel,
  getPlatformsSel,
  getErrorsSel,
};
