/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './dialogs.module.scss';
import Dialog from '../dialog/dialog';
import InputDialogues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Typography from '../../../ui/typography/typography';
import { IChatData, IUser } from '../../../utils/mockChatData';
import SearchIcon from '../../icons/Search/SearchIcon';
import DialogMenuIcon from '../../icons/DialogMenuIcon/DialogMenuIcon';
import DialogMobilePopup from '../chat-dialogue/dialog-mobile-popup/dialog-mobile-popup';
import useClick from '../../../services/hooks/use-click';
import useEscapeKey from '../../../services/hooks/use-esc-key';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { SELECTED_USER } from '../../../services/actions/chat/chat';

// Определение пропсов компонента с возможностью задания функций для обновления состояний
interface ID {
  setSelectedUser?: Dispatch<SetStateAction<IUser>>;
  stateUser: IUser;
}

// Компонент Dialogs, отображающий список диалогов
const Dialogs: FC<ID> = ({ setSelectedUser, stateUser }) => {
  // Определение, используется ли мобильная версия по ширине экрана
  const isMobile = useMediaQuery('(max-width: 860px)');
  // Состояние для управления видимостью поля ввода
  const [isInputVisible, setInputVisible] = useState(false);
  // Состояние для управления видимостью модального окна (временно)
  const [isModalOpen, setModalOpen] = useState(false); // временно

  const [testData, setTestData] = useState<any>([]);

  const [chatHistory, setChatHistory] = useState<any>([]);

  // Массив для подсчета непрочитанных сообщений
  const count: number[] = [];

  const dispatch = useAppDispatch();

  // Функция обработки клика по диалогу
  const handleDialogClick = (el: IChatData) => {
    if (setSelectedUser) {
      // Установка выбранного пользователя
      setSelectedUser(el.user);
      dispatch({ type: SELECTED_USER, payload: el.user });
    }
  };

  const { user, history } = useAppSelector((store: any) => ({
    // eslint-disable-next-line spaced-comment
    //user: store.chat.user,
    user: store.getUserInfo.user,
    history: store.chat.history,
  }));

  useEffect(() => {
    // Сначала создаем список диалогов на основе истории
    const dialogs = history.map((hist) => {
      if (hist === null) {
        return;
      }
      return {
        user: {
          id: hist?.profile,
          name:
            hist?.messages?.find((msg: any) => msg.sender !== user.username)
              ?.sender || 'Неизвестный пользователь',
          status: 'offline', // По умолчанию ставим offline, далее обновим статус если пользователь онлайн
          lastMessageAt: '2023-11-15 00:30:22', // Это заглушка, замените на актуальные данные
          messages: hist?.messages, // Список сообщений в диалоге
        },
      };
    });
    const selectedUser = dialogs.find((dialog) => {
      return dialog.id === stateUser.id;
    }) || {
      id: null,
      name: null,
      status: null,
      messages: [],
      lastMessageAt: null,
    };

    // Сортировка, если необходима, для отображения диалогов в определенном порядке
    // dialogs.sort((a, b) => /* Ваша логика сортировки */);

    setTestData(dialogs);
  }, [history]);

  // Фильтрация уникальных данных для избежания дубликатов диалогов
  // const uniqueData = testData.reduce((a: IChatData[], b: any) => {
  //   if (a.indexOf(b) < 0 && !a.find((el) => el.user.id === b.user.id))
  //     a.push(b);
  //   return a;
  // }, []);

  // Хуки для закрытия модального окна при клике вне его и по нажатию клавиши Escape
  useClick(() => setModalOpen(false), 'dialogsMenuButton');
  useEscapeKey(() => setModalOpen(false));

  return (
    <div className={styles.dialogs}>
      {/* Заголовок и кнопки для мобильной версии */}
      <div className={styles.dialogs__headerContent}>
        <Typography
          tag="h2"
          className={styles.dialogs__header}
          fontFamily="secondary"
        >
          Чаты
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
            {/* Модальное окно для мобильной версии */}
            {isModalOpen && (
              <div className={styles.dialogs__modal}>
                <DialogMobilePopup />
                {/* допилить общий компонент модального окна */}
              </div>
            )}
          </div>
        )}
      </div>
      {/* Отображение поля ввода в зависимости от состояния isInputVisible */}
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
        {testData.length > 0 ? (
          testData.map((el: any) => {
            // Берём последнее сообщение или создаём пустышку, если сообщений нет
            const lastMessage =
              el.user.messages?.length > 0
                ? el.user.messages[el.user.messages.length - 1]
                : { message: 'Нет сообщений', status: '', timeAgo: '' };

            return (
              <div key={Number(el.user.id)}>
                {isMobile ? (
                  <Link
                    to={`/chat/${el.user.id}`}
                    className={styles.dialogs__link}
                  >
                    <Dialog
                      name={el.user.name}
                      text={lastMessage.message}
                      timeAgo={el.user.lastMessageAt || 'Недавно'}
                      messageNum={count[Number(el.user.id)] || 0}
                      key={el.user.id}
                      status={el.user.status || 'offline'}
                    />
                    <div className={styles.dialogs__line} />
                  </Link>
                ) : (
                  <div onClick={() => handleDialogClick(el)}>
                    <Dialog
                      name={el.user.name}
                      text={lastMessage.message}
                      timeAgo={el.user.lastMessageAt || 'Недавно'}
                      messageNum={count[Number(el.user.id)] || 0}
                      key={el.user.id}
                      status={el.user.status || 'offline'}
                    />
                    <div className={styles.dialogs__line} />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className={styles.dialogs__emptyMessage}>
            Нет доступных диалогов
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialogs;
