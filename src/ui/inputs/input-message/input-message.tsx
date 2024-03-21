import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useMediaQuery } from '@mui/material';
import stylesInput from './input-message.module.scss';
import PaperClipIcon from '../../icons/PaperClip/PaperClipIcon';
import EmojiIcon from '../../icons/Emoji/EmojiIcon';
import InvisibleMessageIcon from '../../icons/InvisibleMessage/InvisibleMessageIcon';
import QuickAnswerIcon from '../../icons/QuickAnswer/QuickAnswerIcon';
import AddIcon from '../../icons/Add/AddIcon';
import useModal from '../../../services/hooks/use-modal';
import ModalPopup from '../../../components/popups/modal-popup/modal-popup';
import ChatCompPopup from '../../../components/popups/chat-comp-popup/chat-comp-popup';
import Tooltip from '../../../components/chat/chat-dialogue/tooltip/tooltip';

interface IInputMessage {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickEmoji?: () => void;
  onClickSlash?: () => void;
  onClickZap?: () => void;
}

const InputMessage: FC<IInputMessage> = ({
  value,
  placeholder = 'Введите сообщение...',
  onChange,
  onClickEmoji,
  onClickSlash,
  onClickZap,
}) => {
  const [rotateAddIcon, setRotateAddIcon] = useState(false);
  const isNeedToWrap = useMediaQuery('(max-width: 410px)');
  const { isModalOpen, closeModal, openModal } = useModal();
  const onClickClip = () => {
    openModal();
    localStorage.setItem('isModalOpen', 'true');
  };
  useEffect(() => {
    const storedIsModalOpen = localStorage.getItem('isModalOpen');

    if (storedIsModalOpen === 'true') {
      openModal();
    }
  }, [openModal]);

  const closeModalAndRemoveItem = () => {
    closeModal();
    localStorage.removeItem('isModalOpen');
  };
  const handleRotate = () => setRotateAddIcon(!rotateAddIcon);
  const rotate = rotateAddIcon ? 'unfolded' : 'folded';
  return (
    <div className={stylesInput.message}>
      <TextareaAutosize
        className={stylesInput.message_input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div
        className={
          rotateAddIcon && isNeedToWrap
            ? `${stylesInput.message_buttonsWrapped}`
            : `${stylesInput.message_buttons}`
        }
      >
        <button
          className={stylesInput.message_button}
          type="button"
          onClick={onClickClip}
        >
          <Tooltip text="Прикрепить">
            <PaperClipIcon width={20} height={20} />
          </Tooltip>
        </button>
        <button
          className={stylesInput.message_button}
          type="button"
          onClick={onClickEmoji}
        >
          <Tooltip text="Тут будут эмодзи">
            <EmojiIcon width={20} height={20} />
          </Tooltip>
        </button>
        {rotateAddIcon && (
          <div className={stylesInput.message_hidden}>
            <button
              className={stylesInput.message_button}
              type="button"
              onClick={onClickSlash}
            >
              <Tooltip text="Невидимое сообщение">
                <InvisibleMessageIcon width={20} height={20} />
              </Tooltip>
            </button>
            <button
              className={stylesInput.message_button}
              type="button"
              onClick={onClickZap}
            >
              <Tooltip text="Быстрый ответ">
                <QuickAnswerIcon width={20} height={20} />
              </Tooltip>
            </button>
          </div>
        )}
        <button
          className={stylesInput.message_button}
          type="button"
          onClick={handleRotate}
        >
          <Tooltip text={rotateAddIcon ? 'Cвернуть' : 'Развернуть'}>
            <AddIcon width={24} height={24} position={rotate} />
          </Tooltip>
        </button>
      </div>
      {isModalOpen && (
        <ModalPopup onClick={closeModalAndRemoveItem}>
          <ChatCompPopup />
        </ModalPopup>
      )}
    </div>
  );
};

export default InputMessage;
