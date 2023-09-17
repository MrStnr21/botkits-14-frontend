import { TStore } from '../services/types';

const signupSel = (store: TStore) => store.signup;
const signinSel = (store: TStore) => store.signin;
const getBotsSel = (store: TStore) => store.getBots;
const addBotSel = (store: TStore) => store.addBot;

export { signupSel, signinSel, getBotsSel, addBotSel };
