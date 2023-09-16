import { FC, ChangeEvent, useState } from 'react';

import stylesInput from './input-message.module.scss';

import { ReactComponent as Plus } from '../../../images/icon/36x36/add.svg';
import { ReactComponent as Emoji } from '../../../images/icon/24x24/constructor/emoji.svg';
import { ReactComponent as File } from '../../../images/icon/24x24/add content/file.svg';
import { ReactComponent as Slash } from '../../../images/icon/24x24/common/slash.svg';
import { ReactComponent as Zap } from '../../../images/icon/24x24/common/zap.svg';

interface IInputMessage {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
  const [toggle, setToggle] = useState(false);
  return (
    <div className={stylesInput.message}>
      <input
        className={stylesInput.message_input}
        type="text"
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
          <File className={stylesInput.icon_clip} />
        </button>
        <button
          className={stylesInput.message_button}
          type="button"
          onClick={onClickEmoji}
        >
          <Emoji className={stylesInput.icon} />
        </button>
        {toggle && (
          <div className={stylesInput.message_hidden}>
            <button
              className={stylesInput.message_button}
              type="button"
              onClick={onClickSlash}
            >
              <Slash />
            </button>
            <button
              className={stylesInput.message_button}
              type="button"
              onClick={onClickZap}
            >
              <Zap />
            </button>
          </div>
        )}
        <button
          className={stylesInput.message_button}
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          <Plus
            className={`${stylesInput.icon_plus} ${
              toggle && stylesInput.icon_plus_rotate
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default InputMessage;
