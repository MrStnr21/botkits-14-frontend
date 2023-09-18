import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { getBotsAction } from '../../services/actions/bots/getBot';

import stylesDashboard from './dashboard.module.scss';

import KnowledgeBase from '../../components/dashbord/knowledge-base/knowledge-base';
import Templates from '../../components/dashbord/bots-templates/bots-templates';
import MyBots from '../../components/dashbord/my-bots/my-bots';

const Dashboard: FC = (): JSX.Element => {
  const token: any = useAppSelector(
    (store) =>
      store.signup.user?.accounts[0].credentials.accessToken ||
      store.signin.user?.accounts[0].credentials.accessToken
  );

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
