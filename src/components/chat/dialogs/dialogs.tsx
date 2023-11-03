import { FC } from 'react';
import styles from './dialogs.module.scss';
import Dialog from '../dialog/dialog';
import InputDialogsues from '../InputDialogsues/InputDialogsues';
import Typography from '../../../ui/typography/typography';

const Dialogs: FC = (): JSX.Element => {
  const testData = [
    {
      user: {
        id: '1',
        name: 'Юлия',
        status: 'online',
      },
      lastMessageAt: '2023-11-03 18:30:22',
      textMessage: 'Привет! Ну что там с этим вашим проектом??',
      status: 'unread',
    },
    {
      user: {
        id: '1',
        name: 'Юлия',
        status: 'online',
      },
      lastMessageAt: '2022-11-03 18:30:22',
      textMessage: 'Ghbdtn!',
      status: 'unread',
    },
    {
      user: {
        id: '2',
        name: 'Галя',
        status: 'offline',
      },
      lastMessageAt: '2023-09-27 13:15:00',
      textMessage:
        'Привет! Ну что-то делаем, что тебе ещё сказать - даже и не знаю',
      status: 'read',
    },
    {
      user: {
        id: '2',
        name: 'Галя',
        status: 'offline',
      },
      lastMessageAt: '2023-09-26 13:15:00',
      textMessage: 'Привет! Нуууууууууу',
      status: 'unread',
    },
    {
      user: {
        id: '3',
        name: 'Алексей',
        status: 'offline',
      },
      lastMessageAt: '2022-05-22 12:17:19',
      textMessage: 'Привет! Ну что там там там там там там там',
      status: 'read',
    },
    {
      user: {
        id: '4',
        name: 'Карина',
        status: 'offline',
      },
      lastMessageAt: '2022-10-27 18:47:33',
      textMessage: 'Привет! Всё отлично!!',
      status: 'read',
    },
  ];

  const count: number[] = [];

  testData.forEach((el) => {
    const index = Number(el.user.id);
    if (el.status === 'unread') {
      if (count[index]) {
        count[index] += 1;
      } else {
        count[index] = 1;
      }
    }
  });

  const uniqueData = testData.reduce((a: any[], b) => {
    if (a.indexOf(b) < 0 && !a.find((el) => el.user.id === b.user.id))
      a.push(b);
    return a;
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Typography tag="h2" className={styles.header} fontFamily="secondary">
        Диалоги
      </Typography>
      <InputDialogsues />
      <div className={styles.messagesContainer}>
        {uniqueData.map((el: any) => {
          if (uniqueData.indexOf(el) !== uniqueData.length - 1) {
            return (
              <>
                <Dialog
                  name={el.user.name}
                  text={el.textMessage}
                  timeAgo={el.lastMessageAt}
                  messageNum={count[Number(el.user.id)]}
                  key={el.user.id}
                  status={el.user.status}
                />
                <div className={styles.line} />
              </>
            );
          }
          return (
            <Dialog
              name={el.user.name}
              text={el.textMessage}
              timeAgo={el.lastMessageAt}
              messageNum={count[Number(el.user.id)]}
              key={el.user.id}
              status={el.user.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dialogs;
