import { IToken } from '../services/types/token';

// Функция для сохранения токена в localStorage
const saveAccessToken = (token: IToken) => {
  localStorage.setItem('accessToken', token.accessToken);
};

// Функция для получения токена из localStorage
const getAccessToken = (): IToken | null => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? { accessToken } : null;
};

export { saveAccessToken, getAccessToken };
