/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import styles from './dialog.module.scss';
import Avatar from '../../../ui/avatar/avatar';
import Typography from '../../../ui/typography/typography';
import getTimeAgo from '../../../utils/getTimeAgo';

interface IDialog {
  name: string;
  text: string;
  timeAgo: Date;
  messageNum: number;
  status: string;
}

const Dialog: FC<IDialog> = ({ name, text, timeAgo, messageNum, status }) => {
  function pickChat(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const allLines = document.querySelectorAll(
      '.line'
    ) as unknown as HTMLCollectionOf<HTMLElement>;
    const line = e.currentTarget.lastChild as HTMLElement;
    const newAllLines = Array.from(allLines);

    newAllLines.forEach((el) => {
      if (line !== el) {
        const element = el;
        element.style.display = 'none';
      }
    });
    if (
      line.classList.contains('line') &&
      (line.style.display === 'none' || '')
    ) {
      line.style.display = 'block';
    } else if (line.classList.contains('line')) {
      line.style.display = 'none';
    }
  }

  return (
    <div className={styles.dialog} onClick={(e) => pickChat(e)}>
      <div className={styles.dialog__avatar}>
        <Avatar isBot="no" state={status} big="no" />
      </div>
      <div className={styles.dialog__content}>
        <div className={styles.dialog__nameContainer}>
          <Typography
            tag="span"
            className={styles.dialog__name}
            fontFamily="secondary"
          >
            {name}
          </Typography>
          <Typography
            tag="span"
            className={styles.dialog__timeAgo}
            fontFamily="primary"
          >
            {getTimeAgo(timeAgo, 'custom')}
          </Typography>
        </div>
        <div className={styles.dialog__textContainer}>
          <Typography
            tag="span"
            className={styles.dialog__text}
            fontFamily="primary"
          >
            {text}
          </Typography>
          {messageNum > 0 ? (
            <div className={styles.dialog__messageNumCircle}>
              <Typography
                tag="span"
                className={styles.dialog__messageNum}
                fontFamily="primary"
              >
                {messageNum}
              </Typography>
            </div>
          ) : null}
        </div>
      </div>
      <div className={`line ${styles.dialog__line}`} />
    </div>
  );
};

export default Dialog;
