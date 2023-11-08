import { FC } from 'react';
import styles from './dialog.module.scss';
import Avatar from '../../../ui/avatar/avatar';
import getTimeAgo from '../../../utils/getTimeAgo';
import Typography from '../../../ui/typography/typography';

interface IDialogue {
  name: string;
  text: string;
  timeAgo: Date;
  messageNum: number;
  status: string;
}

const Dialog: FC<IDialogue> = ({
  name,
  text,
  timeAgo,
  messageNum,
  status,
}): JSX.Element => {
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
    <div className={styles.mainContainer} onClick={(e) => pickChat(e)}>
      <div className={styles.avatar}>
        <Avatar isBot="no" state={status} />
      </div>
      <Typography tag="span" className={styles.name} fontFamily="secondary">
        {name}
      </Typography>
      <Typography tag="span" className={styles.text} fontFamily="primary">
        {text}
      </Typography>
      <Typography tag="span" className={styles.timeAgo} fontFamily="primary">
        {getTimeAgo(timeAgo, 'twitter')}
      </Typography>
      {messageNum > 0 ? (
        <div className={styles.messageNumCircle}>
          <Typography
            tag="span"
            className={styles.messageNum}
            fontFamily="primary"
          >
            {messageNum}
          </Typography>
        </div>
      ) : null}
      <div className={`line ${styles.line}`} style={{ display: 'none' }} />
    </div>
  );
};

export default Dialog;
