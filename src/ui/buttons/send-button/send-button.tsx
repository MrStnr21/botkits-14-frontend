import { FC } from 'react';
import stylesSendButton from './send-button.module.scss';
import ArrowIcon from '../../icons/Arrow/ArrowIcon';

type TProps = {
  onClick: () => void;
};

const SendButton: FC<TProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={stylesSendButton.button}>
      <ArrowIcon />
    </button>
  );
};

export default SendButton;
