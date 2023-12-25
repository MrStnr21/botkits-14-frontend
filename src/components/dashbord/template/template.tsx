import { FC, useEffect, useState } from 'react';
import ButtonAddSampleBot from '../../../ui/buttons/button-add-sample-bot/button-add-sample-bot';
import BotTemplate from '../../popups/bot-template-popup/bot-template-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';
import styles from './template.module.scss';
import { TBotTemplate } from '../../../services/types/bot';

const Template: FC<{ template: TBotTemplate }> = ({ template }) => {
  const importImage = async () => {
    try {
      let imageModule;
      if (template.icon.includes('http')) {
        imageModule = template.icon;
        return imageModule;
      }
      imageModule = await import(
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
          <BotTemplate template={template} onClick={closeModal} />
        </ModalPopup>
      )}
    </li>
  );
};

export default Template;
