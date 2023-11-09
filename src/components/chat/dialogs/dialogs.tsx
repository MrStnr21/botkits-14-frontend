import { FC } from 'react';
import styles from './dialogs.module.scss';
import Dialog from '../dialog/dialog';
import InputDialogsues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Typography from '../../../ui/typography/typography';
import { testData } from '../../../utils/mockData';

const Dialogs: FC = (): JSX.Element => {
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
