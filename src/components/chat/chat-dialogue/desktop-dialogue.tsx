/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../services/hooks/hooks';
import stylesDialog from './chat-dialogue.module.scss';
import TrashIcon from '../../icons/Trash/TrashIcon';
import SearchIcon from '../../icons/Search/SearchIcon';
import PlayIcon from '../../icons/Play/PlayIcon';
import CloseIcon from '../../icons/Close/CloseIcon';
import Message from './message/message';
import InputMessage from '../../../ui/inputs/input-message/input-message';
import InputDialogues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Typography from '../../../ui/typography/typography';
// import DialogMobilePopup from './dialog-mobile-popup/dialog-mobile-popup';
import SendButton from '../../../ui/buttons/send-button/send-button';
import Avatar from '../../../ui/avatar/avatar';
import Tooltip from './tooltip/tooltip';
import RightSidebarButton from '../../../ui/buttons/right-sidebar-button/right-sidebar-button';
import { formatDate, DateType } from '../../../utils/formatDate';

interface IChatDialogue {
  onSidebarClick: () => void;
  isInfoVisible: boolean;
  selectedMessages?: any;
  selectedUser?: any;
}

const ChatDialogue: FC<IChatDialogue> = ({
  onSidebarClick,
  isInfoVisible,
  selectedMessages,
  selectedUser,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isInputVisible, setInputVisible] = useState(false);
  // const [isModalOpen, setModalOpen] = useState(false);

  const chatData = useAppSelector((store) => store.websocket.data); // заменить на это моковые данные

  const handleSearchClick = () => {
    setInputVisible(!isInputVisible);
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

  const formattedDate = formatDate(currentDate);

  return (
    <div
      className={selectedMessages ? stylesDialog.dialog : stylesDialog.noBorder}
    >
      {selectedMessages && (
        <>
          <RightSidebarButton
            onClick={onSidebarClick}
            isVisible={isInfoVisible}
            topPX="50%"
            rightPX="0"
          />
          <div className={stylesDialog.dialog__wrapper}>
            <div className={stylesDialog.dialog__header}>
              <div className={stylesDialog.dialog__headerContent}>
                <Avatar state="offline" isBot="yes" big="no" />
                <div className={stylesDialog.dialog__nameWrapper}>
                  <Typography tag="p">{selectedUser.name}</Typography>
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
                <button
                  type="button"
                  className={stylesDialog.dialog__headerButton}
                >
                  <Tooltip text="Воспроизвести">
                    <PlayIcon width={24} height={24} />
                  </Tooltip>
                </button>
                <button
                  type="button"
                  className={stylesDialog.dialog__headerButton}
                >
                  <Tooltip text="Удалить">
                    <TrashIcon width={24} height={24} />
                  </Tooltip>
                </button>
                {/* {isModalOpen && (
                  <div className={stylesDialog.dialog__modal}>
                    <DialogMobilePopup handleClick={handleSearchClick} />
                  </div>
                )} */}
              </div>
            </div>
            <div className={stylesDialog.dialog__borderText}>
              {formattedDate}
            </div>
          </div>
          <div className={stylesDialog.dialog__messages}>
            {selectedMessages.map((message: any) => {
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
