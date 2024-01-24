import { FC } from 'react';

import stylesDashboard from './dashboard.module.scss';

import KnowledgeBase from '../../components/dashbord/knowledge-base/knowledge-base';
import Templates from '../../components/dashbord/templates/templates';
import MyBots from '../../components/dashbord/my-bots/my-bots';

const Dashboard: FC = (): JSX.Element => {
  return (
    <div className={stylesDashboard.dashboard}>
      <Templates />
      <MyBots />
      <KnowledgeBase />
    </div>
  );
};

export default Dashboard;
