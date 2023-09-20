// Функция для сохранения токена в localStorage
const saveAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

// Функция для получения токена из localStorage
const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ?? null;
};

// Функция для сохранения рефреш-токена в localStorage
const saveRefreshToken = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
};

// Функция для получения рефреш-токена из localStorage
const getRefreshToken = (): string | null => {
  const refreshToken = localStorage.getItem('refreshToken');
  return refreshToken ?? null;
};

export { saveAccessToken, saveRefreshToken, getAccessToken, getRefreshToken };
