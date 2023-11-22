/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import styles from './mailing-condition.module.scss';
import Typography from '../../../ui/typography/typography';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';
import Input from '../../../ui/inputs/input/input';
import InputDialogsues from '../../../ui/inputs/input-dialogues/input-dialogues';

interface IProps {
  title?: string;
  handleBack?: () => void;
  handleClickButton?: () => void;
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
const howManyTimes = ['По дням', 'По неделям', 'По месяцам', 'По годам'];

const MailingConditions: FC<IProps> = ({
  title,
  handleBack,
  handleClickButton,
}) => {
  const [selectedVariable, setSelectedVariable] =
    useState<string>('Без повтора');
  const [date, setDate] = useState('');
  const handleMenuClick = (selected: string) => {
    console.log(`Selected variable: ${selected}`);
    setSelectedVariable(selected);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <fieldset className={styles.form__formFieldset}>
          <legend className={styles.form__legend}>
            Шаг 1 {'>'} Создание рассылки Шаг 2 {'>'} Условия рассылки
          </legend>
        </fieldset>
        <fieldset className={styles.form__formFieldset}>
          <Typography tag="h2">{title}</Typography>
        </fieldset>
        <fieldset className={styles.form__inputsFieldset}>
          <div className={styles.form__menuContainer}>
            <Typography tag="p">Отправить</Typography>
            <div className={styles.form__menuWrapper}>
              <MenuVariable buttons={send} nameMenu="Сейчас" />
            </div>
          </div>
          <div className={styles.form__menuContainer}>
            <Typography tag="p">Повторять</Typography>
            <div className={styles.form__menuWrapper}>
              <MenuVariable
                buttons={repeat}
                nameMenu="Без повтора"
                onClick={handleMenuClick}
              />
            </div>
          </div>
          {selectedVariable === 'Свой вариант' && (
            <div className={styles.form__hiddenInputs}>
              <div className={styles.form__smallContainer}>
                <div className={styles.form__menuContainer}>
                  <Typography tag="span">Настроить</Typography>
                  <div className={styles.form__smallMenuWrapper}>
                    <MenuVariable buttons={howManyTimes} nameMenu="По дням" />
                  </div>
                </div>
                <div className={styles.form__menuContainer}>
                  <Typography tag="span">Каждый</Typography>
                  <div className={styles.form__smallMenuWrapper}>
                    <InputDialogsues
                      placeholder="Введите значение"
                      onChange={() => setDate}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.form__checkboxes}>
                <div className={styles.form__dateInput}>
                  <InputDialogsues placeholder="Число месяца" />
                </div>
                <div className={styles.form__dateInput}>
                  <InputDialogsues placeholder="День месяца" />
                </div>
              </div>
            </div>
          )}
        </fieldset>
      </form>
      <div className={styles.container__buttons}>
        <button
          type="button"
          className={styles.container__commonButton}
          onClick={handleBack}
        >
          <Typography tag="p" className={styles.container__buttonText}>
            Назад
          </Typography>
        </button>
        <button
          type="button"
          className={styles.container__greenActiveButton}
          onClick={handleClickButton}
        >
          <Typography tag="p" className={styles.container__blackText}>
            Отправить
          </Typography>
        </button>
      </div>
    </div>
  );
};

export default MailingConditions;
