/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import Avatar from '../../../../ui/avatar/avatar';
import stylesMessage from './message.module.scss';
import Typography from '../../../../ui/typography/typography';

type TMessage = {
  id: number;
  avatar: string;
  user: string;
  message: string;
  time: string;
  seen: string;
  online: boolean;
};

interface IMessage {
  message: TMessage;
}

const Message: FC<IMessage> = ({ message }) => {
  return (
    <div
      className={
        message.user !== 'Вы'
          ? stylesMessage.message
          : `${stylesMessage.message} ${stylesMessage.message__userMessage}`
      }
    >
      <div className={stylesMessage.message__avatar}>
        <Avatar
          isBot={message.user === 'Вы' ? 'no' : 'yes'}
          state={message.online ? 'online' : 'offline'}
          big="no"
        />
      </div>
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
            <Typography
              className={
                message.user !== 'Вы'
                  ? stylesMessage.message__user
                  : `${stylesMessage.message__user} ${stylesMessage.textColorWhite}`
              }
              tag="p"
            >
              {message.user}
            </Typography>
            <div className={stylesMessage.message__textWrapper}>
              <Typography
                className={
                  message.user !== 'Вы'
                    ? stylesMessage.message__text
                    : `${stylesMessage.message__text} ${stylesMessage.textColorWhite}`
                }
                tag="p"
              >
                {message.message}
              </Typography>
              <Typography tag="p" className={stylesMessage.message__time}>
                {message.time}
              </Typography>
            </div>
          </div>
        </div>
        <Typography tag="p" className={stylesMessage.message__seen}>
          Просмотрено в {message.seen}
        </Typography>
      </div>
    </div>
  );
};

export default Message;
