import { useEffect, FC } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import { getUserInfoAction } from '../services/actions/user/user';
import { getBotsAction } from '../services/actions/bots/getBot';

import { getAccessToken } from '../auth/authService';

import { getUserInfoSel } from '../utils/selectorData';
import routesUrl from '../utils/routesData';

type TProtectedRoute = {
  children: JSX.Element;
  notAuth?: boolean;
};

const ProtectedRoute: FC<TProtectedRoute> = ({
  children,
  notAuth = false,
}): JSX.Element => {
  const { user } = useAppSelector(getUserInfoSel);
  const dispatch = useAppDispatch();

  const location: Location = useLocation();

  const token = getAccessToken();

  useEffect(() => {
    if (token) {
      dispatch(getUserInfoAction(token));
      dispatch(getBotsAction(token));
    }
  }, [dispatch]);

  const from: string = location.state?.from || routesUrl.homePage;

  if (user && notAuth) {
    return <Navigate to={from} />;
  }

  if (!notAuth && user === null) {
    return <Navigate to={routesUrl.signup} state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
