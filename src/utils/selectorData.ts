import { TStore } from '../services/types';

const signupSel = (store: TStore) => store.signup;
const signinSel = (store: TStore) => store.signin;

export { signupSel, signinSel };
