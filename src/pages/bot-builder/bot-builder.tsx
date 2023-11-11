import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import TriggerBlock from '../../components/builder/triggerBlock/triggerBlock';
import LayoutFlow from '../../components/builder/flow/layoutFlow';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      <LayoutFlow />
      <TriggerBlock />
    </div>
  );
};

export default BotBuilder;
