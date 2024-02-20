/* eslint-disable no-underscore-dangle */
import { FC, useEffect, useMemo } from 'react';

import styles from './dashboard.module.scss';

import KnowledgeBase from '../../components/dashbord/knowledge-base/knowledge-base';
import Templates from '../../components/dashbord/templates/templates';
import MyBots from '../../components/dashbord/my-bots/my-bots';
import {
  botsSel,
  getTemplatesBotsSel,
  getUserInfoSel,
} from '../../utils/selectorData';
import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { getTemplatesBotsAction } from '../../services/actions/bots/templatesBots';
import { TBot } from '../../services/types/bot';

const Dashboard: FC = (): JSX.Element => {
  const { bots } = useAppSelector(botsSel);
  const { user } = useAppSelector(getUserInfoSel);
  const { botTemplates } = useAppSelector(getTemplatesBotsSel);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (botTemplates.length === 0) {
      dispatch(getTemplatesBotsAction());
    }
  }, [dispatch, botTemplates]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userBots, sharedBots } = useMemo(() => {
    if (!user) {
      return { userBots: [], sharedBots: [] };
    }

    return bots.reduce<{
      userBots: TBot[];
      sharedBots: TBot[];
    }>(
      (acc, bot) => {
        if (bot.profile === user._id) {
          acc.userBots.push(bot);
        } else {
          acc.sharedBots.push(bot);
        }
        return acc;
      },
      { userBots: [], sharedBots: [] }
    );
  }, [bots, user]);

  return (
    <div className={styles.dashboard}>
      {botTemplates.length > 0 && <Templates templates={botTemplates} />}
      <MyBots title="Мои боты" bots={userBots} hasAddBtn />
      {sharedBots.length > 0 && (
        <MyBots
          title="Доступные мне"
          titleStyle="secondary"
          bots={sharedBots}
        />
      )}
      <KnowledgeBase />
    </div>
  );
};

export default Dashboard;
