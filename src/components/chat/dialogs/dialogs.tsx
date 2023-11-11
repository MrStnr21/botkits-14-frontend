/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './dialogs.module.scss';
import Dialog from '../dialog/dialog';
import InputDialogues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Typography from '../../../ui/typography/typography';
import { testData } from '../../../utils/mockChatData';

interface ID {
  setSelectedMessages?: any;
  setSelectedUser?: any;
}

const Dialogs: FC<ID> = ({ setSelectedMessages, setSelectedUser }) => {
  const isMobile = useMediaQuery('(max-width: 620px)');

  const count: number[] = [];

  const handleDialogClick = (el: any) => {
    setSelectedMessages(el.user.messages);
    setSelectedUser({ name: el.user.name, status: el.user.status });
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

  const uniqueData = testData.reduce((a: any[], b) => {
    if (a.indexOf(b) < 0 && !a.find((el) => el.user.id === b.user.id))
      a.push(b);
    return a;
  }, []);

  return (
    <div className={styles.dialogs}>
      <Typography
        tag="h2"
        className={styles.dialogs__header}
        fontFamily="secondary"
      >
        Диалоги
      </Typography>
      <div className={styles.dialogs__inputWrapper}>
        {!isMobile && <InputDialogues iconVisible />}
      </div>
      <div className={styles.dialogs__messagesContainer}>
        {uniqueData.map((el: any) => {
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
                    time={el.user.messages.time}
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
                    time={el.user.messages.time}
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
