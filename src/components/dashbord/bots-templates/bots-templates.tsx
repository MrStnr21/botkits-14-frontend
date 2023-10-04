import { FC, useEffect, useRef, useState } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import stylesTemplates from './bots-templates.module.scss';

import ButtonAddSampleBot from '../../../ui/buttons/button-add-sample-bot/button-add-sample-bot';
// import ModalOverlayPopup from '../../popups/modal-overlay-popup/modal-overlay-popup';
import BotTemplate from '../../popups/bot-template-popup/bot-template-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';

const Template: FC<{ name: string; fileName: string }> = ({
  name,
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
          <BotTemplate title={name} onClick={closeModal} />
        </ModalPopup>
      )}
    </li>
  );
};

const Templates: FC = (): JSX.Element => {
  const data = {
    names_templates: [
      'Бот автоответчик',
      'Доставка еды',
      'Демо бот',
      'Опрос',
      'Лидогенерация/HR ререререре...',
      'Онлайн школа/Вебинар',
      'Закрытый клуб по под...',
      'Агентство по недвижимости',
      'Развлечения',
      'Салон красоты',
      'Онлайн-покупки',
      'Вопрос/ответ',
    ],
    names_files: [
      'answering machine',
      'food delivery',
      'demo bot',
      'poll',
      'lead generation',
      'e-learning',
      'private club',
      'real estate',
      'entertainment',
      'beauty',
      'e-commerce',
      'question',
    ],
  };
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
        {data.names_templates.map((name, index) => (
          <Template key={name} name={name} fileName={data.names_files[index]} />
        ))}
      </ul>
    </div>
  );
};

export default Templates;
