import { FC, useEffect } from 'react';

import stylesDashboard from './dashboard.module.scss';

import KnowledgeBase from '../../components/dashbord/knowledge-base/knowledge-base';
import Templates from '../../components/dashbord/bots-templates/bots-templates';
import MyBots from '../../components/dashbord/my-bots/my-bots';

import { getBotsAction } from '../../services/actions/bots/getBot';
import { useAppDispatch } from '../../services/hooks/hooks';

import { getAccessToken } from '../../auth/authService';

const Dashboard: FC = (): JSX.Element => {
  const token = getAccessToken();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBotsAction(token));
  }, []);
  return (
    <div className={stylesDashboard.dashboard}>
      <Templates />
      <MyBots />
      <KnowledgeBase />
    </div>
  );
};

export default Dashboard;
