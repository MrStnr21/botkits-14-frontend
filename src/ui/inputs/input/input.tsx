// to do: Input
// https://trello.com/c/f5dfbuqo/8-fields-constructor
import { FC, ChangeEvent, useState } from 'react';
import stylesInput from './input.module.scss';
import imgDefault from '../../../images/avatar/circled/for group/default.svg';
import { ReactComponent as Plus } from '../../../images/icon/36x36/add.svg';
import { ReactComponent as Emoji } from '../../../images/icon/24x24/constructor/emoji.svg';
import { ReactComponent as File } from '../../../images/icon/24x24/add content/file.svg';
import { ReactComponent as Slash } from '../../../images/icon/24x24/common/slash.svg';
import { ReactComponent as Zap } from '../../../images/icon/24x24/common/zap.svg';

interface IInput {
  isInvalid?: boolean;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

interface IInputMessage {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickClip?: () => void;
  onClickEmoji?: () => void;
  onClickSlash?: () => void;
  onClickZap?: () => void;
}

interface IPageItem {
  text?: string;
  type?: 'default' | 'upload';
  disabled?: true | false;
  selected?: true | false;
  image?: string;
  onClick?: () => void;
}

interface ILoadPages {
  disabled?: boolean;
  arr: any;
  onClick: () => void;
}

const Input: FC<IInput> = ({
  placeholder = 'Введите ключ доступа',
  isInvalid,
  errorMessage = 'Вы ввели неправильное значение',
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className={stylesInput.wrapper}>
      <input
        className={`${stylesInput.input} ${isInvalid && stylesInput.incorrect}`}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {isInvalid && (
        <p className={stylesInput.incorrect_text}>{errorMessage}</p>
      )}
    </div>
  );
};

const InputMessage: FC<IInputMessage> = ({
  value,
  placeholder = 'Введите сообщение...',
  onChange,
  onClickClip,
  onClickEmoji,
  onClickSlash,
  onClickZap,
}) => {
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

const PageItem: FC<IPageItem> = ({
  type = 'default',
  text = 'Страница',
  disabled,
  selected,
  onClick,
  image = imgDefault,
}) => {
  return (
    <button
      className={`${stylesInput.select} ${
        type === 'upload' ? stylesInput.select_upload : stylesInput.select_item
      } ${selected && stylesInput.selected}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {type === 'upload' ? (
        <>
          <Plus className={stylesInput.upload_img} />
          <p className={stylesInput.upload_text}>Загрузить</p>
        </>
      ) : (
        <>
          <img className={stylesInput.image} src={image} alt="img" />
          <p className={stylesInput.text}>{text}</p>
        </>
      )}
    </button>
  );
};

const LoadPages: FC<ILoadPages> = ({ arr = [], onClick, disabled }) => {
  return (
    <div className={stylesInput.selects}>
      {!arr.length ? (
        <button
          className={stylesInput.selects_button}
          disabled={disabled}
          type="button"
          onClick={onClick}
        >
          <Plus className={stylesInput.upload_img} />
          <p className={stylesInput.selects_text}>Загрузить страницу</p>
        </button>
      ) : (
        <div
          className={`${stylesInput.selects_items} ${
            arr.length > 5 ? stylesInput.scroll : ''
          }`}
        >
          <PageItem type="upload" onClick={onClick} />
          {arr.map((item: any) => (
            <PageItem {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export { Input, LoadPages, PageItem, InputMessage };
