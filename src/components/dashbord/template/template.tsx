import { FC, useEffect, useState } from 'react';
import styles from './template.module.scss';

import ButtonAddSampleBot from '../../../ui/buttons/button-add-sample-bot/button-add-sample-bot';
import BotTemplatePopup from '../../popups/bot-template-popup/bot-template-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';
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

export default Template;
