import { FC } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { getUserRole } from '../auth/authService';
import routesUrl from '../utils/routesData';
import Role from '../services/types/roles';

type TRolesRoute = {
  roles: Role[];
};

/**
 * Компонент-обёртка для роутов. Проверяет наличие токена в localStorage
 * @param roles для каких ролей доступна страница
 * @example
 * <RolesRoute roles=['admin', 'user']>
 *  <ChildComponent/>
 * </RolesRoute>
 */
const RolesRoute: FC<TRolesRoute> = ({ roles = [] }) => {
  const userRole = getUserRole() || '';

  const canAccess = roles.includes(userRole as Role);

  if (canAccess) return <Outlet />;

  return <Navigate to={routesUrl.homePage} />;
};

export default RolesRoute;
