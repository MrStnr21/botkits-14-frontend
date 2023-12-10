import { FC, useEffect, useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import styles from './bots-templates.module.scss';

import ButtonAddSampleBot from '../../../ui/buttons/button-add-sample-bot/button-add-sample-bot';
import BotTemplatePopup from '../../popups/bot-template-popup/bot-template-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getTemplatesBotsAction } from '../../../services/actions/bots/getTemplatesBots';
import { getAccessToken } from '../../../auth/authService';
import { getTemplatesBotsSel } from '../../../utils/selectorData';
import Typography from '../../../ui/typography/typography';
import { TTemplateBot } from '../../../services/types/bot';

const Template: FC<{ template: TTemplateBot }> = ({ template }) => {
  const importImage = async () => {
    try {
      const imageModule = await import(
        `../../../images/icon/template/${template.icon}.svg`
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
  }, [template.icon]);

  return (
    <li className={styles.item}>
      <ButtonAddSampleBot onClick={openModal} icon={image}>
        {template.title}
      </ButtonAddSampleBot>
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <BotTemplatePopup template={template} onClick={closeModal} />
        </ModalPopup>
      )}
    </li>
  );
};

const Templates: FC = () => {
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
    <div className={styles.container}>
      <div className={styles.header_wrapper}>
        <Typography tag="h2" fontFamily="secondary">
          Шаблоны
        </Typography>
        <div className={styles.accordion_wrapper}>
          <button
            className={styles.accordion_button}
            type="button"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            aria-label="xs"
          >
            Все шаблоны
          </button>

          <button
            className={`${styles.accordion_ico_plus} ${
              isExpanded ? styles.accordion_ico_minus : ''
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
          ${styles.list} ${
            isExpanded ? styles.expanded : styles.not_expanded
          } `}
        {...events}
        ref={ref}
      >
        {templatesBots.map((template) => (
          <Template
            // eslint-disable-next-line no-underscore-dangle
            key={template._id}
            template={template}
          />
        ))}
      </ul>
    </div>
  );
};

export default Templates;
