/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { testData } from '../../../../utils/mockChatData';
import Message from '../message/message';
import stylesDialog from '../chat-dialogue.module.scss';
import Typography from '../../../../ui/typography/typography';
import InputDialogues from '../../../../ui/inputs/input-dialogues/input-dialogues';
import Tooltip from '../tooltip/tooltip';
import SearchIcon from '../../../icons/Search/SearchIcon';
import CloseIcon from '../../../icons/Close/CloseIcon';
import PlayIcon from '../../../icons/Play/PlayIcon';
import DialogMenuIcon from '../../../icons/DialogMenuIcon/DialogMenuIcon';
import DialogMobilePopup from '../dialog-mobile-popup/dialog-mobile-popup';
import InputMessage from '../../../../ui/inputs/input-message/input-message';
import SendButton from '../../../../ui/buttons/send-button/send-button';
import ChevronIcon from '../../../icons/Chevron/ChevronIcon';

interface DateType extends Date {
  toDateString(): string;
}

const MobileDialog: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // const handleSearchClick = () => {
  //   setInputVisible(!isInputVisible); // узнать у дизайнера, где открывать инпут поиска по клику
  // };

  const handleChevronClick = () => {
    navigate(-1);
  };

  const handleMenuClick = () => {
    setModalOpen(!isModalOpen);
    setInputVisible(false);
  };

  const user = testData.find((el: any) => el.user.id === id);
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
            <div className={stylesDialog.dialog__nameWrapper}>
              <Link
                to={`/chat/${id}/info`}
                className={stylesDialog.dialog__link}
              >
                <Typography tag="p">{user?.user.name}</Typography>
              </Link>
              <Typography tag="p" className={stylesDialog.dialog__status}>
                {user!.user.status}
              </Typography>
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
            <button type="button" className={stylesDialog.dialog__headerButton}>
              <Tooltip text="Воспроизвести">
                <PlayIcon width={24} height={24} />
              </Tooltip>
            </button>
            <button
              type="button"
              className={stylesDialog.dialog__headerButton}
              onClick={handleMenuClick}
            >
              <DialogMenuIcon />
            </button>
            {isModalOpen && (
              <div className={stylesDialog.dialog__modal}>
                <DialogMobilePopup />
                {/* допилить общий компонент модального окна */}
              </div>
            )}
          </div>
        </div>
        <div className={stylesDialog.dialog__borderText}>{formattedDate}</div>
      </div>
      <div className={stylesDialog.dialog__messages}>
        {user!.user.messages.map((message: any) => {
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
    </div>
  );
};

export default MobileDialog;
