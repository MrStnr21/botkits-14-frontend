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
    <div
      className={
        message.user !== 'Вы'
          ? stylesMessage.message
          : `${stylesMessage.message} ${stylesMessage.userMessage}`
      }
    >
      <div className={stylesMessage.message__avatar}>{message.avatar}</div>
      <div
        className={
          message.user !== 'Вы'
            ? stylesMessage.message__container
            : `${stylesMessage.message__container} ${stylesMessage.message__containerUser}`
        }
      >
        <div
          className={
            message.user !== 'Вы'
              ? stylesMessage.message__block
              : `${stylesMessage.message__blockUser}`
          }
        >
          <div className={stylesMessage.message__content}>
            <p
              className={
                message.user !== 'Вы'
                  ? stylesMessage.message__user
                  : `${stylesMessage.message__user} ${stylesMessage.textColorWhite}`
              }
            >
              {message.user}
            </p>
            <div className={stylesMessage.message__textWrapper}>
              <p
                className={
                  message.user !== 'Вы'
                    ? stylesMessage.message__text
                    : `${stylesMessage.message__text} ${stylesMessage.textColorWhite}`
                }
              >
                {message.message}
              </p>
              <p className={stylesMessage.message__time}>{message.time}</p>
            </div>
          </div>
        </div>
        <p className={stylesMessage.message__seen}>
          Просмотрено в {message.seen}
        </p>
      </div>
    </div>
  );
};

export default Message;
