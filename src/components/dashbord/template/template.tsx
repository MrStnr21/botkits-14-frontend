import { FC, useEffect, useState } from 'react';
import ButtonAddSampleBot from '../../../ui/buttons/button-add-sample-bot/button-add-sample-bot';
import BotTemplate from '../../popups/bot-template-popup/bot-template-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';
import styles from './template.module.scss';

interface TBot {
  icon: string;
  title: string;
  description: string;
}

const Template: FC<{ bot: TBot }> = ({ bot }) => {
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
    <li className={styles.item}>
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

export default Template;
