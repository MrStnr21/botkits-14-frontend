// to do: Input
// https://trello.com/c/PTbLVjsN/9-fields-common
// https://trello.com/c/f5dfbuqo/8-fields-constructor
import { FC, ChangeEvent } from 'react';
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

const Select = () => {
  return <ul>Input</ul>;
};

interface ISelectItem {
  text: string;
  upload?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

const SelectItem: FC<ISelectItem> = ({ upload, text, disabled, selected }) => {
  return (
    <button
      className={`${stylesInput.select} ${
        upload ? stylesInput.select_upload : stylesInput.select_item
      } ${selected && stylesInput.selected}`}
      disabled={disabled}
      type="button"
    >
      {upload ? (
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

export { Input, Select, SelectItem };
