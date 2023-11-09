/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../../services/hooks/hooks';
import stylesDialog from './chat-dialogue.module.scss';
import TrashIcon from '../../icons/Trash/TrashIcon';
import SearchIcon from '../../icons/Search/SearchIcon';
import PlayIcon from '../../icons/Play/PlayIcon';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import CloseIcon from '../../icons/Close/CloseIcon';
import Message from './message/message';
import InputMessage from '../../../ui/inputs/input-message/input-message';
import DialogMenuIcon from '../../icons/DialogMenuIcon/DialogMenuIcon';
import InputDialogues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Typography from '../../../ui/typography/typography';
import DialogMobilePopup from './dialog-mobile-popup/dialog-mobile-popup';
import SendButton from '../../../ui/buttons/send-button/send-button';
import Avatar from '../../../ui/avatar/avatar';
import Tooltip from './tooltip/tooltip';
import RightSidebarButton from '../../../ui/buttons/right-sidebar-button/right-sidebar-button';

interface DateType extends Date {
  toDateString(): string;
}

interface IChatDialogue {
  onSidebarClick: () => void;
  isInfoVisible: boolean;
  selected?: any;
  selectedUser?: any;
}

const ChatDialogue: FC<IChatDialogue> = ({
  onSidebarClick,
  isInfoVisible,
  selected,
  selectedUser,
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 620px)');
  const [inputValue, setInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isInputVisible, setInputVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const chatData = useAppSelector((store) => store.websocket.data); // заменить на это моковые данные

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
      <RightSidebarButton
        onClick={onSidebarClick}
        isVisible={isInfoVisible}
        topPX="50%"
        rightPX="0"
      />
      {selected && (
        <>
          <div className={stylesDialog.dialog__wrapper}>
            <div className={stylesDialog.dialog__header}>
              <div className={stylesDialog.dialog__headerContent}>
                {!isMobile ? (
                  <Avatar state="offline" isBot="yes" big="no" /> // доделать логику отрисовки аватара
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
                  <Typography tag="p">{selectedUser.name}</Typography>
                  {isMobile && (
                    <Typography tag="p" className={stylesDialog.dialog__status}>
                      {selectedUser.status}
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
                <button
                  type="button"
                  className={stylesDialog.dialog__headerButton}
                >
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
            <div className={stylesDialog.dialog__borderText}>
              {formattedDate}
            </div>
          </div>
          <div className={stylesDialog.dialog__messages}>
            {selected.map((message: any) => {
              return <Message message={message} />;
            })}
          </div>
          <div className={stylesDialog.dialog__messageInput}>
            <div className={stylesDialog.dialog__inputWrapper}>
              <InputMessage onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <button type="button" className={stylesDialog.dialog__submitButton}>
              <SendButton />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatDialogue;
