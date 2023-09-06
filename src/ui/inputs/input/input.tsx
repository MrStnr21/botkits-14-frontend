// to do: Input
// https://trello.com/c/PTbLVjsN/9-fields-common
// https://trello.com/c/f5dfbuqo/8-fields-constructor
import { FC, ChangeEvent, ReactNode } from 'react';
import stylesInput from './input.module.scss';
import img from '../../../images/avatar/circled/for group/default.svg';
import { ReactComponent as Plus } from '../../../images/icon/36x36/add.svg';

interface IInput {
  isInvalid?: boolean;
  placeholder: string;
  errorMessage: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

interface ISelectItem {
  text?: string;
  type?: 'default' | 'upload';
  disabled?: true | false;
  selected?: true | false;
  className?: string;
  onClick?: () => void;
}

interface ISelects {
  disabled?: boolean;
  upload: boolean;
  children: ReactNode;
  onClick: () => void;
}

const Input: FC<IInput> = ({
  placeholder,
  isInvalid,
  errorMessage,
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

const SelectItem: FC<ISelectItem> = ({
  type = 'default',
  text = 'Страница',
  disabled,
  selected,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${stylesInput.select} ${
        type === 'upload' ? stylesInput.select_upload : stylesInput.select_item
      } ${selected && stylesInput.selected} ${className}`}
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
          <img src={img} alt="img" />
          <p className={stylesInput.text}>{text}</p>
        </>
      )}
    </button>
  );
};

const Selects: FC<ISelects> = ({ disabled, upload, children, onClick }) => {
  return (
    <div className={stylesInput.selects}>
      {upload ? (
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
        <div className={stylesInput.selects_items}>{children}</div>
      )}
    </div>
  );
};

export { Input, Selects, SelectItem };
