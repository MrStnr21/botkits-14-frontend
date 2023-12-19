/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import BotTemplatesCard from '../../components/bot-templates-card/bot-templates-card';
import stylesBotTemplates from './bot-templates.module.scss';
import Typography from '../../ui/typography/typography';
import Button from '../../ui/buttons/button/button';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import CreateBotTemplatesPopup from '../../components/popups/create-bot-template-popup/create-bot-template-popup';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { getTemplatesBotsSel, getBotsSel } from '../../utils/selectorData';
import {
  getTemplatesBotsAction,
  deleteBotTemplatesAction,
} from '../../services/actions/bots/templatesBots';

const BotTemplates: FC = () => {
  const { templatesBots } = useAppSelector(getTemplatesBotsSel);
  const [arrCard, setArrCard] = useState(templatesBots);
  const [isVisiblePopup, setVisiblePopup] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTemplatesBotsAction());
  }, [dispatch, templatesBots]);

  useEffect(() => {
    setArrCard(templatesBots);
  }, [templatesBots]);

  const onDeleteCard = (id: string) => {
    // eslint-disable-next-line no-underscore-dangle
    // setArrCard(arrCard!.filter((pr) => pr._id !== id));
    dispatch(deleteBotTemplatesAction(id));
  };

  const onClickButton = () => {
    setVisiblePopup(!isVisiblePopup);
    console.log(arrCard);
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
              card={templateBot}
              disabled={templateBot.features ? undefined : true}
              deleteCard={onDeleteCard}
              // eslint-disable-next-line no-underscore-dangle
              key={templateBot._id}
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
