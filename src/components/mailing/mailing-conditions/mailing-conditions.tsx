/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import styles from './mailing-condition.module.scss';
import Typography from '../../../ui/typography/typography';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';
import InputDialogsues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Calendar from '../../calendar/calendar';
import MenuTime from '../../../ui/menus/menu-time/menu-time';

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
  const [selectedRepeat, setSelectedRepeat] = useState<string>('Без повтора');
  const [sendTime, setSendTime] = useState<string>('Сейчас');
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [selectedInterval, setSelectedInterval] = useState<string>('По дням');
  const [period, setPeriod] = useState<string>('');

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [timeMenuOpen, setTimeMenuOpen] = useState(false);
  const [isOff, off] = useState(false);

  const [dat, setDat] = useState('');

  const handleRepeatClick = (selected: string) => {
    setSelectedRepeat(selected);
  };

  const handleSendTimeClick = (selected: string) => {
    setSendTime(selected);
  };

  const handleCalendarClick = (selected: any) => {
    setDate(selected);
  };

  const handleIntervalClick = (selected: any) => {
    setSelectedInterval(selected);
  };

  useEffect(() => {
    switch (selectedInterval) {
      case 'По дням':
        setPeriod('День');
        break;
      case 'По неделям':
        setPeriod('Неделю');
        break;
      case 'По месяцам':
        setPeriod('Месяц');
        break;
      case 'По годам':
        setPeriod('Год');
        break;
    }
  }, [selectedInterval]);

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
            <MenuVariable
              width="265px"
              buttons={send}
              nameMenu={sendTime}
              onClick={handleSendTimeClick}
            />
          </div>
          {sendTime === 'Дата/Время' && (
            <fieldset className={styles.form__dateTimeWrapper}>
              <div className={styles.form__menuContainer}>
                <Typography tag="span">Дата</Typography>
                <MenuVariable
                  width="144px"
                  nameMenu={!date ? '24.05.2022' : date}
                  buttons={[]}
                  onDivClick={() => setCalendarOpen(!calendarOpen)}
                />
                {calendarOpen && (
                  <div className={styles.form__calendar}>
                    <Calendar handleFunction={handleCalendarClick} />
                  </div>
                )}
              </div>
              <div className={styles.form__menuContainer}>
                <Typography tag="span">Время</Typography>
                <MenuVariable
                  nameMenu={!time ? '04:00' : time}
                  buttons={[]}
                  width="144px"
                  onDivClick={() => setTimeMenuOpen(!timeMenuOpen)}
                />
                {timeMenuOpen && (
                  <div className={styles.form__calendar}>
                    <MenuTime
                      saveFunction={(selected: string) => setTime(selected)}
                      clearFunction={() => setTime('')}
                    />
                  </div>
                )}
              </div>
            </fieldset>
          )}
          <div className={styles.form__menuContainer}>
            <Typography tag="p">Повторять</Typography>
            <MenuVariable
              width="265px"
              buttons={repeat}
              nameMenu={selectedRepeat}
              onClick={handleRepeatClick}
            />
          </div>
          {selectedRepeat === 'Свой вариант' && (
            <div className={styles.form__hiddenInputs}>
              <div className={styles.form__smallInputsContainer}>
                <div className={styles.form__menuContainer}>
                  <Typography tag="span">Настроить</Typography>
                  <MenuVariable
                    buttons={howManyTimes}
                    nameMenu={selectedInterval}
                    width="174px"
                    onClick={handleIntervalClick}
                  />
                </div>
                <div className={styles.form__menuContainer}>
                  <Typography tag="span">Каждый</Typography>
                  <MenuVariable nameMenu={period} buttons={[]} width="174px" />
                </div>
                {!isOff && (
                  <div className={styles.form__relativeInput}>
                    <InputDialogsues
                      placeholder="Введите значение"
                      onChange={() => setDat}
                    />
                    <button
                      type="button"
                      className={styles.form__hideBtn}
                      onClick={() => off(!isOff)}
                    >
                      Скрыть
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.form__smallInputsContainer}>
                <div className={styles.form__dateInput}>
                  <InputDialogsues placeholder="Число месяца" />
                </div>
                <div className={styles.form__dateInput}>
                  {/* Создать компонент инпута */}
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
