import { useEffect, FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppDispatch } from '../services/hooks/hooks';
import { getUserInfoAction } from '../services/actions/user/user';
import { getBotsAction } from '../services/actions/bots/getBot';

import { getAccessToken } from '../auth/authService';

import routesUrl from '../utils/routesData';

type TProtectedRoute = {
  children: JSX.Element;
  notAuth?: boolean;
};

/**
 * Компонент-обёртка для роутов. Проверяет наличие токена в localStorage
 * @param {boolean} notAuth нужна ли аутентификация для посещения страницы
 * @example
 * <ProtectedRoute notAuth>
 *  <ChildComponent/>
 * </ProtectedRoute>
 */
const ProtectedRoute: FC<TProtectedRoute> = ({
  children,
  notAuth = false,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const token = getAccessToken();

  useEffect(() => {
    if (token) {
      dispatch(getUserInfoAction(token));
      dispatch(getBotsAction(token));
    }
  }, [dispatch]);

  if (token && notAuth) {
    return <Navigate to={routesUrl.homePage} />;
  }

  if (!notAuth && !token) {
    return <Navigate to={routesUrl.signup} />;
  }

  return children;
};

export default ProtectedRoute;
