/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import BotTemplatesCard from '../../components/BotTemplatesCard/BotTemplatesCard';
import stylesBotTemplates from './bot-templates.module.scss';
import Typography from '../../ui/typography/typography';
import Button from '../../ui/buttons/button/button';
import { mockBotTemplates } from '../../utils/mockBotTemplates';

const BotTemplates: FC = () => {
  const [arrCard, setArrCard] = useState(mockBotTemplates);

  const onDeleteCard = (id: string) => {
    setArrCard(arrCard.filter((pr) => pr.id !== id));
  };

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
        {arrCard &&
          arrCard.map((templateBot) => (
            <BotTemplatesCard
              image={templateBot.icon}
              id={templateBot.id}
              title={templateBot.title}
              description={templateBot.description}
              isToPublish={templateBot.isToPublish}
              deleteCard={onDeleteCard}
            />
          ))}
      </ul>
    </div>
  );
};

export default BotTemplates;
