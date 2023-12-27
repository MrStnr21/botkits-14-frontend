import { FC, useState, useEffect } from 'react';
import BotTemplatesCard from '../../components/bot-templates-card/bot-templates-card';
import stylesBotTemplates from './bot-templates.module.scss';
import Typography from '../../ui/typography/typography';
import Button from '../../ui/buttons/button/button';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import CreateBotTemplatesPopup from '../../components/popups/create-bot-template-popup/create-bot-template-popup';

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks';
import { getTemplatesBotsSel } from '../../utils/selectorData';
import {
  getTemplatesBotsAction,
  deleteBotTemplatesAction,
} from '../../services/actions/bots/templatesBots';

const BotTemplates: FC = () => {
  const { botTemplates } = useAppSelector(getTemplatesBotsSel);
  const [templates, setTemplates] = useState(botTemplates);
  const [isVisiblePopup, setVisiblePopup] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (botTemplates.length !== 0) {
      setTemplates(botTemplates);
    } else dispatch(getTemplatesBotsAction());
  }, [botTemplates]);

  const onDeleteCard = (id: string) => {
    // eslint-disable-next-line no-underscore-dangle
    // setArrCard(arrCard!.filter((pr) => pr._id !== id));
    dispatch(deleteBotTemplatesAction(id));
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
        {templates &&
          templates.map((templateBot) => (
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
