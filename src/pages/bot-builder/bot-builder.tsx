import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import TriggerBlock from '../../components/builder/triggerBlock/triggerBlock';
import SavingToCrmBlock from '../../components/builder/blocks/saving-to-crm-block/saving-to-crm-block';
import TelegramPayment from '../../components/builder/telegramPayment/telegramPayment';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      BotBuilder
      <div className={stylesBotBuilder.test}>
        <SavingToCrmBlock />
      </div>
      <TriggerBlock />
      <TelegramPayment />
    </div>
  );
};

export default BotBuilder;
