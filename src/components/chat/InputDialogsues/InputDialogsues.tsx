import { FC, ChangeEvent } from 'react';
import stylesInput from './InputDialogsues.module.scss';
import { ReactComponent as File } from '../../../images/icon/24x24/add content/file.svg';

interface IInputDialogsues {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickFilter?: () => void;
}

const InputDialogsues: FC<IInputDialogsues> = ({
  value,
  placeholder = 'Поиск...',
  onChange,
  onClickFilter,
}): JSX.Element => {
  return (
    <div className={stylesInput.message}>
      {/* <File className={stylesInput.icon} /> */}
      <input
        className={stylesInput.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className={stylesInput.button}
        type="button"
        onClick={onClickFilter}
      >
        <File className={stylesInput.icon} />
      </button>
    </div>
  );
};

export default InputDialogsues;
