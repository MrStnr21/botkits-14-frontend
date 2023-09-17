import { FC } from 'react';
import stylesDashboard from './dashboard.module.scss';
import Templates from '../../components/dashbord/bots-templates/bots-templates';
import KnowledgeBase from '../../components/dashbord/knowledge-base/knowledge-base';
import MyBots from '../../components/dashbord/my-bots/my-bots';

const Dashboard: FC = () => {
  return (
    <div className={stylesDashboard.dashboard}>
      <Templates />
      <MyBots />
      <KnowledgeBase />
    </div>
  );
};

export default Dashboard;
