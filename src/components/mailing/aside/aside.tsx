/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Descendant } from 'slate';
import Typography from '../../../ui/typography/typography';
import styles from './aside.module.scss';
import robot from '../../../images/robot-logo.png';
import robotEmoji from '../../../images/RoboEmoji.png';
import { slateSerialize } from '../../../utils/utils';
import SlateConverter from './slate-converter/slate-converted';

interface IProps {
  title: string;
  text: Descendant[];
}

const AsideMailing: FC<IProps> = ({ title, text }) => {
  const serializedText = slateSerialize(text).split('\n');
  return (
    <div className={styles.aside}>
      <div className={styles.aside__header}>
        <Typography tag="p" className={styles.aside__defaultText}>
          Тестовый виджет
        </Typography>
        <Typography tag="h3" className={styles.aside__title}>
          {title}
        </Typography>
      </div>
      <div className={styles.aside__main}>
        <div className={styles.aside__message}>
          <img
            src={robotEmoji}
            alt="Robot Emoji"
            className={styles.aside__robot}
          />
          <div className={styles.aside__messageBubble}>
            {serializedText.length ? (
              <Typography tag="p" className={styles.aside__botName}>
                Бот
              </Typography>
            ) : (
              ''
            )}
            {serializedText && serializedText[0].length
              ? text.map((item, index) => (
                  <SlateConverter key={index} descendant={item} />
                ))
              : '...'}
          </div>
        </div>
        <button type="submit" className={styles.aside__mainBtn}>
          Отправить себе
        </button>
      </div>
      <div className={styles.aside__footer}>
        <Typography tag="p" className={styles.aside__defaultText}>
          Powered by
          <img src={robot} alt="Robot Logo" className={styles.aside__logo} />
          Botkits
        </Typography>
      </div>
    </div>
  );
};

export default AsideMailing;
