import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import TriggerBlock from '../../components/builder/triggerBlock/triggerBlock';
// import SavingToCrmBlock from '../../components/builder/blocks/saving-to-crm-block/saving-to-crm-block';
import HeaderBlock from '../../components/builder/blocks/header-block/header-block';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      BotBuilder
      {/* <div className={stylesBotBuilder.test}>
        <SavingToCrmBlock />
      </div> */}
      <div className={stylesBotBuilder.test}>
        <HeaderBlock />
      </div>
      <TriggerBlock />
    </div>
  );
};

export default BotBuilder;
