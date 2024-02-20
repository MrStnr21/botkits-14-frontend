/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, useState } from 'react';
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
import { formatDate } from '../../../utils/chatDateFunctions';
import { IMessage, IUser } from '../../../utils/mockChatData';
import DeleteChatPopup from '../../popups/delete-chat-popup/delete-chat-popup';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import useModal from '../../../services/hooks/use-modal';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { wsActions } from '../../../services/actions/socket/socketActions';

interface IChatDialogue {
  onSidebarClick: () => void;
  isInfoVisible: boolean;
}

const ChatDialogue: FC<IChatDialogue> = ({ onSidebarClick, isInfoVisible }) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);
  const { isModalOpen, closeModal, openModal } = useModal();
  const dispatch = useAppDispatch();

  const { user, selectedUser } = useAppSelector((store: any) => ({
    user: store.getUserInfo.user,
    selectedUser: store.chat.selectedUser,
  }));

  console.log(selectedUser);

  /* useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date() as DateType;
      setCurrentDate(now);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []); */

  const formattedDate = formatDate(new Date());

  const handleButtonClick = () => {
    setTimeout(() => {}, 3000);
    const a = selectedUser.messages[0];
    const b = a.chatId;
    const res = b.slice(1).split(':');
    // eslint-disable-next-line no-underscore-dangle
    console.log(`Это отправитель - ${user._id}`);
    console.log(`Это получатель - ${res[0]}`);
    const dataMessage = {
      // eslint-disable-next-line no-underscore-dangle
      participants: [`${res[0]}`, `${user._id}`],
      sender: user.username, // Идентификатор отправителя
      message: inputValue, // Текст сообщения
      time: new Date().toISOString(), // Временная метка сообщения
      status: 'sent', // Статус сообщения
      avatar: '',
    };
    dispatch({ type: wsActions.wsSend, payload: dataMessage });
  };

  return (
    <div
      className={
        selectedUser.messages ? stylesDialog.dialog : stylesDialog.noBorder
      }
    >
      {selectedUser.messages?.length ? (
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
            {selectedUser.messages.map((message: any) => {
              return <Message message={message} key={message.id} />;
            })}
          </div>
          <div className={stylesDialog.dialog__messageInput}>
            <div className={stylesDialog.dialog__inputWrapper}>
              <InputMessage onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <button type="button" className={stylesDialog.dialog__submitButton}>
              <SendButton onClick={handleButtonClick} />
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
