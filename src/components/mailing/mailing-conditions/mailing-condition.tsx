import { FC } from 'react';
import styles from './mailing-condition.module.scss';
import Typography from '../../../ui/typography/typography';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';

interface IProps {
  title: string;
}

const repeat = [
  'Без повтора',
  'Каждый день',
  'Каждую неделю',
  'Каждый месяц',
  'Каждый год',
  'Свой вариант',
];
const send = ['Сейчас', 'Дата/Время'];

const MailingConditions: FC<IProps> = ({ title }) => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.form__formFieldset}>
        <legend className={styles.form__legend}>
          Шаг 1 {'>'} Создание рассылки, Шаг 2 {'>'} Условия рассылки
        </legend>
      </fieldset>
      <fieldset className={styles.form__formFieldset}>
        <Typography tag="h2">{title}</Typography>
      </fieldset>
      <fieldset className={styles.form__formFieldset}>
        <div className={styles.form__menuWrapper}>
          Отправить <MenuVariable buttons={send} nameMenu="Сейчас" />
        </div>
        <div className={styles.form__menuWrapper}>
          Повторять <MenuVariable buttons={repeat} nameMenu="Без повтора" />
        </div>
      </fieldset>
    </form>
  );
};

export default MailingConditions;
