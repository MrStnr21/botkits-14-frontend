/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import BotTemplatesCard from '../../components/BotTemplatesCard/BotTemplatesCard';
import stylesBotTemplates from './bot-templates.module.scss';
import Typography from '../../ui/typography/typography';
import Button from '../../ui/buttons/button/button';
import { mockBotTemplates } from '../../utils/mockBotTemplates';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import CreateBotTemplatesPopup from '../../components/popups/create-bot-template-popup/create-bot-template-popup';

const BotTemplates: FC = () => {
  const [arrCard, setArrCard] = useState(mockBotTemplates);
  const [isVisiblePopup, setVisiblePopup] = useState(false);

  const onDeleteCard = (id: string) => {
    setArrCard(arrCard.filter((pr) => pr.id !== id));
  };

  const onClickButton = () => {
    setVisiblePopup(!isVisiblePopup);
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
            onClick={onClickButton}
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
              key={templateBot.id}
            />
          ))}
      </ul>
      {/* {isVisiblePopup && } */}
      {isVisiblePopup && (
        <ModalPopup onClick={() => setVisiblePopup(false)}>
          <CreateBotTemplatesPopup closeModal={onClickButton} />
        </ModalPopup>
      )}
    </div>
  );
};

export default BotTemplates;
