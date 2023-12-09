/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './dialogs.module.scss';
import Dialog from '../dialog/dialog';
import InputDialogues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Typography from '../../../ui/typography/typography';
import {
  IChatData,
  IMessage,
  IUser,
  testData,
} from '../../../utils/mockChatData';
import SearchIcon from '../../icons/Search/SearchIcon';
import DialogMenuIcon from '../../icons/DialogMenuIcon/DialogMenuIcon';
import DialogMobilePopup from '../chat-dialogue/dialog-mobile-popup/dialog-mobile-popup';
import useClick from '../../../services/hooks/use-click';
import useEscapeKey from '../../../services/hooks/use-esc-key';

interface ID {
  setSelectedMessages?: Dispatch<SetStateAction<IMessage[]>>;
  setSelectedUser?: Dispatch<SetStateAction<IUser>>;
}

const Dialogs: FC<ID> = ({ setSelectedMessages, setSelectedUser }) => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [isInputVisible, setInputVisible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // временно

  const count: number[] = [];

  const handleDialogClick = (el: IChatData) => {
    if (setSelectedMessages) {
      setSelectedMessages(el.user.messages);
    }

    if (setSelectedUser) {
      setSelectedUser(el.user);
    }
  };

  testData.forEach((el) => {
    el.user.messages.forEach((message) => {
      const index = Number(el.user.id);
      const { status } = message;
      if (status === 'unread') {
        // дописать логику пометки непрочитанных сообщений только от пользователя }
        if (count[index]) {
          count[index] += 1;
        } else {
          count[index] = 1;
        }
      }
    });
  });

  const uniqueData = testData.reduce((a: IChatData[], b) => {
    if (a.indexOf(b) < 0 && !a.find((el) => el.user.id === b.user.id))
      a.push(b);
    return a;
  }, []);

  useClick(() => setModalOpen(false), 'dialogsMenuButton');
  useEscapeKey(() => setModalOpen(false));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__headerContent}>
        <Typography
          tag="h2"
          className={styles.dialogs__header}
          fontFamily="secondary"
        >
          Диалоги
        </Typography>
        {isMobile && (
          <div className={styles.dialogs__icons}>
            <button
              type="button"
              onClick={() => setInputVisible(!isInputVisible)}
              className={styles.dialogs__button}
            >
              <SearchIcon size="large" />
            </button>
            <button
              type="button"
              className={styles.dialogs__button}
              onClick={() => setModalOpen(true)}
              id="dialogsMenuButton"
            >
              <DialogMenuIcon size="24" />
            </button>
            {isModalOpen && (
              <div className={styles.dialogs__modal}>
                <DialogMobilePopup />
                {/* допилить общий компонент модального окна */}
              </div>
            )}
          </div>
        )}
      </div>
      {isMobile ? (
        <div className={styles.dialogs__inputWrapper}>
          {isInputVisible && <InputDialogues iconVisible />}
        </div>
      ) : (
        <div className={styles.dialogs__inputWrapper}>
          <InputDialogues iconVisible search />
        </div>
      )}
      <div className={styles.dialogs__messagesContainer}>
        {uniqueData.map((el: any) => {
          // исправить типизацию элемента
          const lastMessage = el.user.messages[el.user.messages.length - 1];
          return (
            <div key={Number(el.user.id)}>
              {isMobile ? (
                <Link
                  to={`/chat/${el.user.id}`}
                  className={styles.dialogs__link}
                >
                  <Dialog
                    name={el.user.name}
                    text={el.user.messages[el.user.messages.length - 1].message}
                    timeAgo={el.user.lastMessageAt}
                    messageNum={count[Number(el.user.id)]}
                    key={el.user.id}
                    status={el.user.status}
                  />
                  <div className={styles.dialogs__line} />
                </Link>
              ) : (
                <div onClick={() => handleDialogClick(el)}>
                  <Dialog
                    name={el.user.name}
                    text={el.user.messages[el.user.messages.length - 1].message}
                    timeAgo={el.user.lastMessageAt}
                    messageNum={count[Number(el.user.id)]}
                    key={el.user.id}
                    status={el.user.status}
                  />
                  <div className={styles.dialogs__line} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dialogs;
