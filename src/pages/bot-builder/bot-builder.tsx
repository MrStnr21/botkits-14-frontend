import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import TriggerBlock from '../../components/builder/triggerBlock/triggerBlock';
import HeaderBlock from '../../components/builder/blocks/header-block/header-block';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      BotBuilder      
      <div className={stylesBotBuilder.test}>
        <HeaderBlock />
      </div>
      <TriggerBlock />
    </div>
  );
};

export default BotBuilder;
