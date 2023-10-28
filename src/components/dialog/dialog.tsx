/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router';
import stylesDialog from './dialog.module.scss';
import TrashIcon from '../icons/Trash/TrashIcon';
import SearchIcon from '../icons/Search/SearchIcon';
import PlayIcon from '../icons/Play/PlayIcon';
import ChevronIcon from '../icons/Chevron/ChevronIcon';
import CloseIcon from '../icons/Close/CloseIcon';
import Message from './message/message';
import NewMessage from '../../ui/message/message';
import InputMessage from '../../ui/inputs/input-message/input-message';
import DialogMenuIcon from '../icons/DialogMenuIcon/DialogMenuIcon';
import InputDialogsues from '../chat/InputDialogsues/InputDialogsues';
import Typography from '../../ui/typography/typography';
import DialogMobilePopup from './dialog-mobile-popup/dialog-mobile-popup';
import SendButton from '../../ui/buttons/send-button/send-button';
import Avatar from '../../ui/avatar/avatar';

const messages = [
  {
    id: 1,
    avatar: '',
    user: 'Вячеслав Баумтрок',
    message: 'Привет, как это сделать?',
    time: '16 мин назад',
    online: false,
    seen: '14:05',
  },
  {
    id: 2,
    avatar: '',
    user: 'Вы',
    message: `Привет, user, вообще делать не надо`,
    time: '14 мин назад',
    online: true,
    seen: '14:12',
  },
  {
    id: 3,
    avatar: '',
    user: 'Вячеслав Баумтрок',
    message: 'Ок, спасибо :)',
    time: '10 мин назад',
    online: false,
    seen: '14:15',
  },
];

interface DateType extends Date {
  toDateString(): string;
}

const Dialog: FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isInputVisible, setInputVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 620px)');

  const handleSearchClick = () => {
    setInputVisible(!isInputVisible);
  };

  const handleMenuClick = () => {
    setModalOpen(!isModalOpen);
    setInputVisible(false);
  };

  const handleChevronClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date() as DateType;
      setCurrentDate(now);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
  }

  const formattedDate = formatDate(currentDate);

  return (
    <div className={stylesDialog.dialog}>
      <div className={stylesDialog.dialog__header}>
        <div className={stylesDialog.dialog__headerContent}>
          {!isMobile ? (
            <Avatar state="offline" isBot="yes" /> // доделать логику отрисовки аватара
          ) : (
            <button
              type="button"
              className={stylesDialog.dialog__headerButton}
              onClick={handleChevronClick}
            >
              <ChevronIcon
                width={24}
                height={24}
                color="#a6b3c9"
                position="left"
              />
            </button>
          )}
          <div className={stylesDialog.dialog__nameWrapper}>
            <Typography tag="p">Вячеслав Баумтрок</Typography>
            {isMobile && (
              <Typography tag="p" className={stylesDialog.dialog__status}>
                В работе
              </Typography>
            )}
          </div>
        </div>
        <div className={stylesDialog.dialog__iconsWrapper}>
          {isInputVisible && (
            <div className={stylesDialog.dialog__headerInputWrapper}>
              <InputDialogsues
                placeholder="Поиск..."
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
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
          {!isMobile ? (
            <button type="button" className={stylesDialog.dialog__headerButton}>
              <TrashIcon width={24} height={24} />
            </button>
          ) : (
            <button
              type="button"
              className={stylesDialog.dialog__headerButton}
              onClick={handleMenuClick}
            >
              <DialogMenuIcon />
            </button>
          )}
          {isModalOpen && (
            <div className={stylesDialog.dialog__modal}>
              <DialogMobilePopup handleClick={handleSearchClick} />
            </div>
          )}
        </div>
      </div>
      <div className={stylesDialog.dialog__borderText}>{formattedDate}</div>
      <div className={stylesDialog.dialog__messages}>
        {messages.map((message) => {
          return <Message message={message} />;
        })}
        {/* {messages.map((message) => {
          return <NewMessage message={message.message} />;
        })} */}
      </div>
      <div className={stylesDialog.dialog__messageInput}>
        <div className={stylesDialog.dialog__inputWrapper}>
          <InputMessage onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <button type="button" className={stylesDialog.dialog__submitButton}>
          <SendButton />
        </button>
      </div>
    </div>
  );
};

export default Dialog;
