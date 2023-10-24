import React, { FC } from 'react';
import stylesMessage from './message.module.scss';
import getTimeAgo from '../../utils/getTimeAgo';

interface IMessage {
  name?: string;
  message: string;
  type: string;
}

const Message: FC<IMessage> = ({
  name,
  message,
  type = 'outgoing' || 'incoming',
}): JSX.Element => {
  // пример использования timestamp
  const randomDate = new Date('2023-10-17 19:17:19');
  const timestamp = getTimeAgo(randomDate);

  return (
    <div className={stylesMessage.mainContainer}>
      <div
        className={
          type === 'outgoing'
            ? stylesMessage.messageSenderTail
            : stylesMessage.messageRecipientTail
        }
      />
      <div
        className={
          type === 'outgoing'
            ? stylesMessage.messageSenderTailBack
            : stylesMessage.messageRecipientTailBack
        }
      />
      <div
        className={
          type === 'outgoing'
            ? stylesMessage.messageSenderContainer
            : stylesMessage.messageRecipientContainer
        }
      >
        <p
          className={
            type === 'outgoing'
              ? stylesMessage.nameSender
              : stylesMessage.nameRecipient
          }
        >
          {type === 'outgoing' ? 'Вы' : `${name}`}
        </p>
        <p
          className={
            type === 'outgoing'
              ? stylesMessage.textSender
              : stylesMessage.textRecipient
          }
        >
          {message}
        </p>
        <span className={stylesMessage.timestamp}>{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
