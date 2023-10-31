/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
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
import InputDialogues from '../../ui/inputs/input-dialogues/input-dialogues';
import Typography from '../../ui/typography/typography';
import DialogMobilePopup from './dialog-mobile-popup/dialog-mobile-popup';
import SendButton from '../../ui/buttons/send-button/send-button';
import Avatar from '../../ui/avatar/avatar';
import store from '../../services/store';
import messages from '../../utils/ messages';
import Tooltip from './tooltip/tooltip';

interface DateType extends Date {
  toDateString(): string;
}

const Dialog: FC = () => {
  const dispatch = useDispatch();

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
      <div className={stylesDialog.dialog__wrapper}>
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
              {/* Заменить на имя юзера с бэка */}
              {isMobile && (
                <Typography tag="p" className={stylesDialog.dialog__status}>
                  В работе {/* Заменить на статус юзера с бэка */}
                </Typography>
              )}
            </div>
          </div>
          <div className={stylesDialog.dialog__iconsWrapper}>
            {isInputVisible && (
              <div className={stylesDialog.dialog__headerInputWrapper}>
                <InputDialogues
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
                  <Tooltip text="Поиск">
                    <SearchIcon size="large" />
                  </Tooltip>
                ) : (
                  <Tooltip text="Закрыть">
                    <CloseIcon color="#a6b3c9" />
                  </Tooltip>
                )}
              </button>
            )}
            <button type="button" className={stylesDialog.dialog__headerButton}>
              <Tooltip text="Воспроизвести">
                <PlayIcon width={24} height={24} />
              </Tooltip>
            </button>
            {!isMobile ? (
              <button
                type="button"
                className={stylesDialog.dialog__headerButton}
              >
                <Tooltip text="Удалить">
                  <TrashIcon width={24} height={24} />
                </Tooltip>
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
      </div>
      {/* <div className={stylesDialog.dialog__borderText}>{formattedDate}</div> */}
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
