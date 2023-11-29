/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import BotTemplatesCard from '../../components/BotTemplatesCard/BotTemplatesCard';
import stylesBotTemplates from './bot-templates.module.scss';
import Typography from '../../ui/typography/typography';
import Button from '../../ui/buttons/button/button';
import { mockBotTemplates } from '../../utils/mockBotTemplates';

const BotTemplates: FC = () => {
  return (
    <div className={stylesBotTemplates.layout}>
      <div className={stylesBotTemplates.header}>
        <Typography tag="h2" fontFamily="secondary">
          Шаблоны ботов
        </Typography>
        <div className={stylesBotTemplates.wrapper}>
          <Button
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="submit"
          >
            Добавить шаблон
          </Button>
        </div>
      </div>
      <ul
        className={`
          ${stylesBotTemplates.list} `}
      >
        {mockBotTemplates.map((templateBot) => (
          <BotTemplatesCard
            image={templateBot.icon}
            title={templateBot.title}
            description={templateBot.description}
            price={templateBot.price}
            isToPublish={templateBot.isToPublish}
          />
          //   key={templateBot.title + +index}
          //   name={templateBot.title}
          //   description={templateBot.description}
          //   fileName={templateBot.icon}
          // />
        ))}
      </ul>
    </div>
  );
};

export default BotTemplates;
