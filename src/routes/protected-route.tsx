import { useEffect, FC } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import { getAccessToken } from '../auth/authService';
import { getUserInfoSel } from '../utils/selectorData';
import { getUserInfoAction } from '../services/actions/user/user';
import routesUrl from '../utils/routesData';
import { getBotsAction } from '../services/actions/bots/getBot';

type TProtectedRoute = {
  children: JSX.Element;
  notAuth?: boolean;
};

const ProtectedRoute: FC<TProtectedRoute> = ({ children, notAuth = false }) => {
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

  if (!user && !notAuth) {
    return <Navigate to={routesUrl.signup} state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
