import { ReactElement } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import PanelInline from '../../components/builder/blocks/message-block/panel-inline/panel-inline';

const BotBuilder = (): ReactElement => {
  return (
    <div className={stylesBotBuilder.title}>
      BotBuilder
      <PanelInline title="eee" />
    </div>
  );
};

export default BotBuilder;
