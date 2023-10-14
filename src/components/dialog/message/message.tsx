/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import stylesMessage from './message.module.scss';

type TMessage = {
  id: number;
  avatar: string;
  user: string;
  message: string;
  time: string;
  seen: string;
};

interface IMessage {
  message: TMessage;
}

const Message: FC<IMessage> = ({ message }): JSX.Element => {
  return (
    <div className={stylesMessage.message}>
      <p>{message.user}</p>
      <p>{message.message}</p>
    </div>
  );
};

export default Message;
