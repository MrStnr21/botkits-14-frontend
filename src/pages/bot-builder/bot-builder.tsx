import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import LayoutFlow from '../../components/builder/flow/layoutFlow';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      <LayoutFlow />
    </div>
  );
};

export default BotBuilder;
