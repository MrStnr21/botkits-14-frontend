/** Функции для работы с localStorage */

/**
 * Функция для сохранения токена в localStorage
 * @param accessToken сохраняемый токен
 */
const saveAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

/**
 * Функция для получения токена из localStorage
 */
const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ?? null;
};

/**
 * Функция удаление токена
 */
const removeAccessToken = (): void => {
  localStorage.removeItem('accessToken');
};

/**
 * Функция для сохранения рефреш-токена в localStorage
 * @param refreshToken сохраняемый токен
 */
const saveRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
};

/**
 * Функция для получения рефреш-токена из localStorage
 */
const getRefreshToken = (): string | null => {
  const refreshToken = localStorage.getItem('refreshToken');
  return refreshToken ?? null;
};

/**
 * Функция удаление рефреш-токена
 */
const removeRefreshToken = (): void => {
  localStorage.removeItem('refreshToken');
};

const saveSocial = (social: string) => {
  localStorage.setItem('social', social);
};

const getSocial = () => {
  return localStorage.getItem('social');
};

const removeSocial = (): void => {
  localStorage.removeItem('social');
};

export {
  saveAccessToken,
  saveRefreshToken,
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  saveSocial,
  getSocial,
  removeSocial,
};
