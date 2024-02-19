/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import styles from './dialog.module.scss';
import Avatar from '../../../ui/avatar/avatar';
import Typography from '../../../ui/typography/typography';
import getTimeAgo from '../../../utils/getTimeAgo';

// Описание пропсов компонента Dialog
interface IDialog {
  name: string; // Имя пользователя в диалоге
  text: string; // Последнее сообщение в диалоге
  timeAgo: Date; // Время последнего сообщения
  messageNum: number; // Количество непрочитанных сообщений
  status: string; // Статус пользователя (например, онлайн или оффлайн)
}

// Определение компонента Dialog
const Dialog: FC<IDialog> = ({ name, text, timeAgo, messageNum, status }) => {
  // Обработчик клика по диалогу для управления отображением линии под ним
  function pickChat(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // Получение всех элементов с классом 'line'
    const allLines = document.querySelectorAll(
      '.line'
    ) as unknown as HTMLCollectionOf<HTMLElement>;
    const line = e.currentTarget.lastChild as HTMLElement; // Последний дочерний элемент текущего диалога (линия)
    const newAllLines = Array.from(allLines); // Преобразование NodeList в массив

    // Скрытие всех линий, кроме активной
    newAllLines.forEach((el) => {
      if (line !== el) {
        el.style.display = 'none';
      }
    });

    // Переключение видимости активной линии
    if (
      line.classList.contains('line') &&
      (line.style.display === 'none' || '')
    ) {
      line.style.display = 'block';
    } else if (line.classList.contains('line')) {
      line.style.display = 'none';
    }
  }

  // Рендеринг компонента
  return (
    <div className={styles.dialog} onClick={(e) => pickChat(e)}>
      {/* Аватар пользователя */}
      <div className={styles.dialog__avatar}>
        <Avatar isBot="no" state={status} big="no" />
      </div>
      {/* Контент диалога: имя пользователя, время последнего сообщения и текст последнего сообщения */}
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
          {/* Индикатор количества непрочитанных сообщений */}
          {messageNum > 0 && (
            <div className={styles.dialog__messageNumCircle}>
              <Typography
                tag="span"
                className={styles.dialog__messageNum}
                fontFamily="primary"
              >
                {messageNum}
              </Typography>
            </div>
          )}
        </div>
      </div>
      {/* Линия под диалогом, видимость которой управляется через pickChat */}
      <div className={`line ${styles.dialog__line}`} />
    </div>
  );
};

export default Dialog;
