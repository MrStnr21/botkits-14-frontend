import { useEffect, FC } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import { getUserInfoAction } from '../services/actions/user/user';

import routesUrl from '../utils/routesData';
import { getUserInfoSel } from '../utils/selectorData';
import { getAccessToken } from '../auth/authService';

type TProtectedRoute = {
  notAuth?: boolean;
};

/**
 * Компонент-обёртка для роутов. Проверяет наличие токена в localStorage
 * @param {boolean} notAuth страницу видят только неавторизованные пользователи
 * @example
 * <ProtectedRoute notAuth>
 *  <ChildComponent/>
 * </ProtectedRoute>
 */
const ProtectedRoute: FC<TProtectedRoute> = ({
  notAuth = false,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { state, pathname } = useLocation();
  const { user, getUserInfoRequest, userRequestedFirstTime } =
    useAppSelector(getUserInfoSel);

  const accessToken = getAccessToken();

  useEffect(() => {
    if (!user && !getUserInfoRequest) {
      dispatch(getUserInfoAction());
    }
  }, [user]);

  if (getUserInfoRequest || !userRequestedFirstTime) {
    // Лоадер
    return <div />;
  }

  if (!user && !notAuth && (!accessToken || userRequestedFirstTime)) {
    return <Navigate to={routesUrl.signin} state={{ prev: pathname }} />;
  }

  if (user && notAuth) {
    return <Navigate to={state?.prev ? state.prev : routesUrl.homePage} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
