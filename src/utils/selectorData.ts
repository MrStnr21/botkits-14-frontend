import { TStore } from '../services/types';

const signupSel = (store: TStore) => store.signup;
const signinSel = (store: TStore) => store.signin;
const resetPasswordSel = (store: TStore) => store.resetPassword;
const getUserInfoSel = (store: TStore) => store.getUserInfo;
const botsSel = (store: TStore) => store.bots;
const getTemplatesBotsSel = (store: TStore) => store.getTemplatesBots;
const getPlatformsSel = (store: TStore) => store.getPlatforms;
const botAccessesSel = (store: TStore) => store.botAccesses;

export {
  signupSel,
  signinSel,
  botsSel,
  getUserInfoSel,
  resetPasswordSel,
  getTemplatesBotsSel,
  getPlatformsSel,
  botAccessesSel,
};
