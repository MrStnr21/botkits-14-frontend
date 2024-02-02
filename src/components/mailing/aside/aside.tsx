/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { Descendant } from 'slate';
import Typography from '../../../ui/typography/typography';
import styles from './aside.module.scss';
import robot from '../../../images/robot-logo.png';
import robotEmoji from '../../../images/RoboEmoji.png';
import SlateConverter from './slate-converter/slate-converted';

interface IProps {
  title: string;
  text: Descendant[];
}

const AsideMailing: FC<IProps> = ({ title, text }) => {
  const isFilled =
    (text && text[0].children![0].text) || (text && text.length > 1);
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
            {isFilled ? (
              <Typography tag="p" className={styles.aside__botName}>
                Бот
              </Typography>
            ) : (
              ''
            )}
            {isFilled
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
