import { FC, useEffect, useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import stylesTemplates from './bots-templates.module.scss';

import ButtonAddSampleBot from '../../../ui/buttons/button-add-sample-bot/button-add-sample-bot';
import BotTemplate from '../../popups/bot-template-popup/bot-template-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getTemplatesBotsAction } from '../../../services/actions/bots/getTemplatesBots';
import { getAccessToken } from '../../../auth/authService';
import { getTemplatesBotsSel } from '../../../utils/selectorData';

const Template: FC<{ name: string; description: string; fileName: string }> = ({
  name,
  description,
  fileName,
}): JSX.Element => {
  const importImage = async () => {
    try {
      const imageModule = await import(
        `../../../images/icon/template/${fileName}.svg`
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
  }, [fileName]);

  return (
    <li className={stylesTemplates.item}>
      <ButtonAddSampleBot onClick={openModal} icon={image}>
        {name}
      </ButtonAddSampleBot>
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <BotTemplate
            title={name}
            description={description}
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

  console.log(templatesBots);
  const [isExpanded, setIsExpanded] = useState(false);

  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return (
    <div className={stylesTemplates.container}>
      <div className={stylesTemplates.header_wrapper}>
        <h2 className={stylesTemplates.title}>Шаблоны</h2>
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
        {templatesBots.map((templateBot, index) => (
          <Template
            key={templateBot.title + +index}
            name={templateBot.title}
            description={templateBot.description}
            fileName={templateBot.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default Templates;
