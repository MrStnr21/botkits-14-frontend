import React, { FC, ChangeEvent, useState } from 'react';
import stylesInput from './input-message.module.scss';
import PaperClipIcon from '../../../components/icons/PaperClip/PaperClipIcon';
import EmojiIcon from '../../../components/icons/Emoji/EmojiIcon';
import InvisibleMessageIcon from '../../../components/icons/InvisibleMessage/InvisibleMessageIcon';
import QuickAnswerIcon from '../../../components/icons/QuickAnswer/QuickAnswerIcon';
import AddIcon from '../../../components/icons/Add/AddIcon';

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
      <textarea
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
          <PaperClipIcon width={20} height={20} />
        </button>
        <button
          className={stylesInput.message_button}
          type="button"
          onClick={onClickEmoji}
        >
          <EmojiIcon width={20} height={20} />
        </button>
        {rotateAddIcon && (
          <div className={stylesInput.message_hidden}>
            <button
              className={stylesInput.message_button}
              type="button"
              onClick={onClickSlash}
            >
              <InvisibleMessageIcon width={20} height={20} />
            </button>
            <button
              className={stylesInput.message_button}
              type="button"
              onClick={onClickZap}
            >
              <QuickAnswerIcon width={20} height={20} />
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
