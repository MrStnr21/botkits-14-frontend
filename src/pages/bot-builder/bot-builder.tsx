import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';

const BotBuilder: FC = (): JSX.Element => {
  return <div className={stylesBotBuilder.title}>BotBuilder</div>;
};

export default BotBuilder;
