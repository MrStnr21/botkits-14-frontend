/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import styles from './dialog.module.scss';
import Avatar from '../../../ui/avatar/avatar';
import Typography from '../../../ui/typography/typography';

interface IDialog {
  name: string;
  text: string;
  time: string;
  messageNum: number;
  status: string;
}

const Dialog: FC<IDialog> = ({ name, text, time, messageNum, status }) => {
  function pickChat(e: { target: any } | undefined) {
    const allLines = document.querySelectorAll(
      '.line'
    ) as unknown as HTMLCollectionOf<HTMLElement>;
    const line = e!.target.parentNode.lastChild;
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
      <Typography
        tag="span"
        className={styles.dialog__name}
        fontFamily="secondary"
      >
        {name}
      </Typography>
      <Typography
        tag="span"
        className={styles.dialog__text}
        fontFamily="primary"
      >
        {text}
      </Typography>
      <Typography
        tag="span"
        className={styles.dialog__timeAgo}
        fontFamily="primary"
      >
        {time}
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
      <div
        className={`line ${styles.dialog__line}`}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Dialog;
