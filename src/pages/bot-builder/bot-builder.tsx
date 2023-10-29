import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
<<<<<<< HEAD
=======
import TriggerBlock from '../../components/builder/triggerBlock/triggerBlock';
// import SavingToCrmBlock from '../../components/builder/blocks/saving-to-crm-block/saving-to-crm-block';
import HeaderBlock from '../../components/builder/blocks/header-block/header-block';
>>>>>>> 1509a3a (частично реализован компонент header-block)

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      BotBuilder
<<<<<<< HEAD
=======
      {/* <div className={stylesBotBuilder.test}>
        <SavingToCrmBlock />
      </div> */}
      <div className={stylesBotBuilder.test}>
        <HeaderBlock />
      </div>
      <TriggerBlock />
>>>>>>> 1509a3a (частично реализован компонент header-block)
    </div>
  );
};

export default BotBuilder;
