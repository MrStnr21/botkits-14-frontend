import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import TriggerBlock from '../../components/builder/triggerBlock/triggerBlock';
// import VariableBlockNode from '../../components/builder/blocks/variable/variable';
// import SavingToCrmBlock from '../../components/builder/blocks/saving-to-crm-block/saving-to-crm-block';
import ApiBlockNode from '../../components/builder/blocks/api/api';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      BotBuilder
      <div className={stylesBotBuilder.test}>
        {/* <SavingToCrmBlock /> */}
        <ApiBlockNode />
        {/* <VariableBlockNode /> */}
      </div>
      <TriggerBlock />
    </div>
  );
};

export default BotBuilder;
