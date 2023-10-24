import { FC } from 'react';
import stylesSendButton from './send-button.module.scss';
import ArrowIcon from '../../../components/icons/Arrow/ArrowIcon';

const SendButton: FC = (): JSX.Element => {
  return (
    <button type="button" className={stylesSendButton.button}>
      <ArrowIcon />
    </button>
  );
};

export default SendButton;
