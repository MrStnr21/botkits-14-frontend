import { FC } from 'react';
import MessengersPopup from '../../components/popups/messangers-popup/messangers-popup';
import stylesBotBuilder from './bot-builder.module.scss';
import LayoutFlow from '../../components/builder/flow/layoutFlow';

const BotBuilder: FC = (): JSX.Element => {
  return (
    <div className={stylesBotBuilder.title}>
      <LayoutFlow />
      <MessengersPopup />
    </div>
  );
};

export default BotBuilder;
