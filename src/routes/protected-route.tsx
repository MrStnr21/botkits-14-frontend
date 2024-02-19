import { useEffect, FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import { getUserInfoAction } from '../services/actions/user/user';
import { getBotsAction } from '../services/actions/bots/getBot';

import routesUrl from '../utils/routesData';
import { getUserInfoSel } from '../utils/selectorData';

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
  const { user, getUserInfoRequest } = useAppSelector(getUserInfoSel);

  /* const token = getAccessToken(); */

  useEffect(() => {
    if (!user && !getUserInfoRequest) {
      dispatch(getUserInfoAction());
      dispatch(getBotsAction());
    }
  }, []);

  if (getUserInfoRequest) {
    // Лоадер
    return <div />;
  }

  if (user && notAuth) {
    return <Navigate to={routesUrl.homePage} />;
  }

  if (!notAuth && !user) {
    return <Navigate to={routesUrl.signup} />;
  }

  return children;
};

export default ProtectedRoute;
