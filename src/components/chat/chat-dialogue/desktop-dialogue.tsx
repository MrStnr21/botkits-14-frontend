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
import SendButton from '../../../ui/buttons/send-button/send-button';
import Avatar from '../../../ui/avatar/avatar';
import Tooltip from './tooltip/tooltip';
import RightSidebarButton from '../../../ui/buttons/right-sidebar-button/right-sidebar-button';
import { formatDate, DateType } from '../../../utils/chatDateFunctions';
import { IMessage, IUser } from '../../../utils/mockChatData';
import DeleteChatPopup from '../../popups/delete-chat-popup/delete-chat-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';

interface IChatDialogue {
  onSidebarClick: () => void;
  isInfoVisible: boolean;
  selectedMessages: IMessage[] | null;
  selectedUser: IUser | null;
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
  const { isModalOpen, closeModal, openModal } = useModal();
  const chatData = useAppSelector((store) => store.websocket.data); // заменить на это моковые данные

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
      {selectedMessages?.length ? (
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
                  <Typography tag="p">{selectedUser!.name}</Typography>
                </div>
              </div>
              <div className={stylesDialog.dialog__iconsWrapper}>
                {isInputVisible && (
                  <div className={stylesDialog.dialog__headerInputWrapper}>
                    <InputDialogues
                      search
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
                  onClick={openModal}
                >
                  <Tooltip text="Удалить">
                    <TrashIcon width={24} height={24} />
                  </Tooltip>
                </button>
              </div>
            </div>
            <div className={stylesDialog.dialog__borderText}>
              {formattedDate}
            </div>
          </div>
          <div className={stylesDialog.dialog__messages}>
            {selectedMessages.map((message) => {
              return <Message message={message} key={message.id} />;
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
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
      )}
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <DeleteChatPopup closeModal={closeModal} />
        </ModalPopup>
      )}
    </div>
  );
};

export default ChatDialogue;
