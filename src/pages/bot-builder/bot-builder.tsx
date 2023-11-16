import { FC } from 'react';

import stylesBotBuilder from './bot-builder.module.scss';
import LayoutFlow from '../../components/builder/flow/layoutFlow';
import MessagersPopup from '../../components/popups/messangers-popup/messangers-popup';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      <LayoutFlow />
      <MessagersPopup onClose={() => {}} />
    </div>
  );
};

export default BotBuilder;
