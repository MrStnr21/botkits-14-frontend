import React, { FC, ChangeEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import stylesInput from './input-message.module.scss';
import PaperClipIcon from '../../../components/icons/PaperClip/PaperClipIcon';
import EmojiIcon from '../../../components/icons/Emoji/EmojiIcon';
import InvisibleMessageIcon from '../../../components/icons/InvisibleMessage/InvisibleMessageIcon';
import QuickAnswerIcon from '../../../components/icons/QuickAnswer/QuickAnswerIcon';
import AddIcon from '../../../components/icons/Add/AddIcon';
import Tooltip from '../../../components/dialog/tooltip/tooltip';

interface IInputMessage {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickClip?: () => void;
  onClickEmoji?: () => void;
  onClickSlash?: () => void;
  onClickZap?: () => void;
}

const InputMessage: FC<IInputMessage> = ({
  value,
  placeholder = 'Введите сообщение...',
  onChange,
  onClickClip,
  onClickEmoji,
  onClickSlash,
  onClickZap,
}): JSX.Element => {
  const [rotateAddIcon, setRotateAddIcon] = useState(false);
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
      <div className={stylesInput.message_buttons}>
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
          <AddIcon width={24} height={24} position={rotate} />
        </button>
      </div>
    </div>
  );
};

export default InputMessage;
