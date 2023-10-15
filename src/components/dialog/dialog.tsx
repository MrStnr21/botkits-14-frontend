/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import stylesDialog from './dialog.module.scss';
import TrashIcon from '../icons/Trash/TrashIcon';
import SearchIcon from '../icons/Search/SearchIcon';
import PlayIcon from '../icons/Play/PlayIcon';
import ChevronIcon from '../icons/Chevron/ChevronIcon';
import CloseIcon from '../icons/Close/CloseIcon';
import avatar from '../../images/avatar/circled/default.svg';
import Message from './message/message';
import InputMessage from '../../ui/inputs/input-message/input-message';
import Input from '../../ui/inputs/input/input';

const messages = [
  {
    id: 1,
    avatar: '',
    user: 'Вячеслав Баумтрок',
    message: 'Привет, как это сделать?',
    time: '16 мин назад',
    seen: '14:05',
  },
  {
    id: 2,
    avatar: '',
    user: 'Вы',
    message: `Привет, user, вообще делать не надо`,
    time: '14 мин назад',
    seen: '14:12',
  },
  {
    id: 3,
    avatar: '',
    user: 'Вячеслав Баумтрок',
    message: 'Ок, спасибо :)',
    time: '10 мин назад',
    seen: '14:15',
  },
];

interface DateType extends Date {
  toDateString(): string;
}

const Dialog: FC = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isInputVisible, setInputVisible] = useState(false);

  const isMobile = useMediaQuery('(max-width: 620px)');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date() as DateType;
      setCurrentDate(now);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []); // в дальнейшем не пригодится?

  function formatDate(date: DateType): string {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    if (date.toDateString() === now.toDateString()) {
      return 'Сегодня';
    }
    if (date.toDateString() === yesterday.toDateString()) {
      return 'Вчера';
    }
    const options: any = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('ru-RU', options);
  } // в дальнейшем эта функция должна принимать дату последнего сообщения

  const formattedDate = formatDate(currentDate);

  return (
    <div className={stylesDialog.dialog}>
      <div className={stylesDialog.dialog__header}>
        <div className={stylesDialog.dialog__headerContent}>
          {!isMobile ? (
            <img
              src={avatar}
              alt="avatar"
              className={stylesDialog.dialog__avatar}
            />
          ) : (
            <ChevronIcon
              width={24}
              height={24}
              color="#a6b3c9"
              position="left"
            />
          )}
          <div className={stylesDialog.dialog__nameWrapper}>
            <p className={stylesDialog.dialog__name}>Вячеслав Баумтрок</p>
            {isMobile && (
              <p className={stylesDialog.dialog__status}>В работе</p>
            )}
          </div>
        </div>
        <div className={stylesDialog.dialog__iconsWrapper}>
          {isInputVisible && (
            <div className={stylesDialog.dialog__headerInputWrapper}>
              <Input
                placeholder="Поиск..."
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                } // заменить на инпут поиска
              />
            </div>
          )}
          {!isMobile && (
            <button
              type="button"
              className={stylesDialog.dialog__headerButton}
              onClick={() => setInputVisible(!isInputVisible)}
            >
              {!isInputVisible ? (
                <SearchIcon size="large" />
              ) : (
                <CloseIcon color="#a6b3c9" />
              )}
            </button>
          )}
          <button type="button" className={stylesDialog.dialog__headerButton}>
            <PlayIcon width={24} height={24} />
          </button>
          <button type="button" className={stylesDialog.dialog__headerButton}>
            <TrashIcon width={24} height={24} />{' '}
            {/* добавить условие отрисовки кнопки для открытия попапа */}
          </button>
        </div>
      </div>
      <div className={stylesDialog.dialog__borderText}>{formattedDate}</div>
      {/* задать отступ границе по бокам текста на мобильных устройствах */}
      <div className={stylesDialog.dialog__messages}>
        {messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>
      <div className={stylesDialog.dialog__messageInput}>
        <div className={stylesDialog.dialog__inputWrapper}>
          <InputMessage
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </div>
        <button type="button" className={stylesDialog.dialog__submitButton}>
          Кнопка
        </button>
      </div>
    </div>
  );
};

export default Dialog;
