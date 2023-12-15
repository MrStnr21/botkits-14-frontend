import { FC, useEffect, useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import stylesTemplates from './bots-templates.module.scss';

import ButtonAddSampleBot from '../../../ui/buttons/button-add-sample-bot/button-add-sample-bot';
import BotTemplate from '../../popups/bot-template-popup/bot-template-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getTemplatesBotsAction } from '../../../services/actions/bots/templatesBots';
import { getAccessToken } from '../../../auth/authService';
import { getTemplatesBotsSel } from '../../../utils/selectorData';
import Typography from '../../../ui/typography/typography';

interface TBot {
  icon: string;
  title: string;
  description: string;
}

const Template: FC<{ bot: TBot }> = ({ bot }): JSX.Element => {
  const importImage = async () => {
    try {
      let imageModule;
      if (bot.icon.includes('http')) {
        imageModule = bot.icon;
        return imageModule;
      }
      imageModule = await import(
        `../../../images/icon/template/${bot.icon}.svg`
      );
      return imageModule.default;
    } catch (error) {
      return 'null';
    }
  };

  const [image, setImage] = useState<string>('');
  const { isModalOpen, closeModal, openModal } = useModal();

  useEffect(() => {
    importImage().then((importedImage) => {
      setImage(importedImage);
    });
  }, [bot.icon]);

  return (
    <li className={stylesTemplates.item}>
      <ButtonAddSampleBot onClick={openModal} icon={image}>
        {bot.title}
      </ButtonAddSampleBot>
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <BotTemplate
            title={bot.title}
            description={bot.description}
            onClick={closeModal}
          />
        </ModalPopup>
      )}
    </li>
  );
};

const Templates: FC = (): JSX.Element => {
  const { templatesBots } = useAppSelector(getTemplatesBotsSel);

  const dispatch = useAppDispatch();

  const token = getAccessToken();

  useEffect(() => {
    dispatch(getTemplatesBotsAction(token));
  }, [dispatch]);

  const [isExpanded, setIsExpanded] = useState(false);

  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return (
    <div className={stylesTemplates.container}>
      <div className={stylesTemplates.header_wrapper}>
        <Typography tag="h2" fontFamily="secondary">
          Шаблоны
        </Typography>
        <div className={stylesTemplates.accordion_wrapper}>
          <button
            className={stylesTemplates.accordion_button}
            type="button"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            aria-label="xs"
          >
            Все шаблоны
          </button>

          <button
            className={`${stylesTemplates.accordion_ico_plus} ${
              isExpanded ? stylesTemplates.accordion_ico_minus : ''
            }`}
            type="button"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            aria-label="xs"
          />
        </div>
      </div>
      <ul
        className={`
          ${stylesTemplates.list} ${
            isExpanded ? stylesTemplates.expanded : stylesTemplates.not_expanded
          } `}
        {...events}
        ref={ref}
      >
        {templatesBots !== null &&
          templatesBots.map((templateBot) => (
            <Template
              // eslint-disable-next-line no-underscore-dangle
              key={templateBot._id}
              bot={templateBot}
            />
          ))}
      </ul>
    </div>
  );
};

export default Templates;
