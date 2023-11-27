/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import BotTemplatesCard from '../../components/BotTemplatesCard/BotTemplatesCard';
import stylesBotTemplates from './bot-templates.module.scss';

const BotTemplates: FC = () => {
  return (
    <div className={stylesBotTemplates.layout}>
      <BotTemplatesCard />
    </div>
  );
};

export default BotTemplates;
