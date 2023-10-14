/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import stylesDialog from './dialog.module.scss';
import TrashIcon from '../icons/Trash/TrashIcon';
import SearchIcon from '../icons/Search/SearchIcon';
import PlayIcon from '../icons/Play/PlayIcon';
import avatar from '../../images/avatar/circled/default.svg';
import Message from './message/message';

const messages = [
  {
    id: 1,
    avatar: 'Avatar',
    user: 'Вячеслав Баумтрок',
    message: 'Привет, как это сделать?',
    time: '16 мин назад',
    seen: 'Просмотрено в 14:05',
  },
  {
    id: 2,
    avatar: 'Avatar',
    user: 'Вы',
    message: `Привет, user, вообще делать не надо`,
    time: '14 мин назад',
    seen: 'Просмотрено в 14:12',
  },
  {
    id: 3,
    avatar: 'Avatar',
    user: 'Вячеслав Баумтрок',
    message: 'Ок, спасибо :)',
    time: '10 мин назад',
    seen: 'Просмотрено в 14:05',
  },
];

const Dialog: FC = (): JSX.Element => {
  return (
    <div className={stylesDialog.dialog}>
      <div className={stylesDialog.dialog__header}>
        <div className={stylesDialog.dialog__nameWrapper}>
          <img
            src={avatar}
            alt="avatar"
            className={stylesDialog.dialog__avatar}
          />
          <p className={stylesDialog.dialog__name}>Вячеслав Баумтрок</p>
        </div>
        <div className={stylesDialog.dialog__iconsWrapper}>
          <button type="button" className={stylesDialog.dialog__headerButton}>
            <SearchIcon size="large" />
          </button>
          <button type="button" className={stylesDialog.dialog__headerButton}>
            <PlayIcon width={24} height={24} />
          </button>
          <button type="button" className={stylesDialog.dialog__headerButton}>
            <TrashIcon width={24} height={24} />
          </button>
        </div>
      </div>
      <div className={stylesDialog.dialog__messages}>
        {messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>
    </div>
  );
};

export default Dialog;
