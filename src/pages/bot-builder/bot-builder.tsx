import { ReactElement } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';

const BotBuilder = (): ReactElement => {
  return <div className={stylesBotBuilder.title}>BotBuilder</div>;
};

export default BotBuilder;
