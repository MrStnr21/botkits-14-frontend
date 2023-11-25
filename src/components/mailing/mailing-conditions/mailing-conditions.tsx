/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import styles from './mailing-condition.module.scss';
import Typography from '../../../ui/typography/typography';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';
import InputDialogsues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Calendar from '../../calendar/calendar';
import MenuTime from '../../../ui/menus/menu-time/menu-time';
import CheckIcon from '../../icons/Check/CheckIcon';
import MailingSelect from '../mailing-select/mailing-select';
import { Option } from '../../../utils/types';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { ReactComponent as CalendarIcon } from '../../../images/icon/24x24/time/calandar.svg';
import { ReactComponent as TimeIcon } from '../../../images/icon/24x24/time/time.svg';
import TimeSelect from '../time-select/time-select';

interface IProps {
  title?: string;
  handleBack?: () => void;
  handleClickButton?: () => void;
}

const repeat = [
  { label: 'Без повтора', value: 'Без повтора' },
  { label: 'Без повтора', value: 'Без повтора' },
  { label: 'Каждый день', value: 'Каждый день' },
  { label: 'Каждый месяц', value: 'Каждый месяц' },
  { label: 'Каждый год', value: 'Каждый год' },
  { label: 'Свой вариант', value: 'Свой вариант' },
];

const send = [
  { label: 'Сейчас', value: 'Сейчас' },
  { label: 'Дата/Время', value: 'Дата/Время' },
];

const howManyTimes = [
  { label: 'По дням', value: 'По дням' },
  { label: 'По неделям', value: 'По неделям' },
  { label: 'По месяцам', value: 'По месяцам' },
  { label: 'По годам', value: 'По годам' },
];

const howOften = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
];

const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const crumbs = [
  { label: 'Создание рассылки', to: '/mailing/create' },
  { label: 'Условия рассылки', to: '/mailing/create/conditions' },
];

const MailingConditions: FC<IProps> = ({
  title,
  handleBack,
  handleClickButton,
}) => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [selectedRepeat, setSelectedRepeat] = useState<Option | null>(
    repeat[0]
  );
  const [sendTime, setSendTime] = useState<Option | null>(send[0]);
  const [time, setTime] = useState<string>('4:00');
  const [date, setDate] = useState<Option | null>({
    label: '24.05.22',
    value: '24.05.22',
  });
  const [selectedInterval, setSelectedInterval] = useState<Option | null>(
    howManyTimes[0]
  );
  const [period, setPeriod] = useState<Option | null>(howOften[0]);
  const [weekDay, setWeekDay] = useState<string>('');

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [timeMenuOpen, setTimeMenuOpen] = useState(false);
  const [isFirstOpen, setFirstOpen] = useState(false);
  const [isSecondOpen, setSecondOpen] = useState(false);

  const [isOff, off] = useState(false);
  const [dat, setDat] = useState('');

  const toggleFirst = () => {
    setFirstOpen(!isFirstOpen);
    setSecondOpen(false);
  };

  const toggleSecond = () => {
    setSecondOpen(!isSecondOpen);
    setFirstOpen(false);
  };

  const handleRepeatClick = (selected: Option) => {
    setSelectedRepeat(selected);
  };

  const handleSendTimeClick = (selected: Option) => {
    setSendTime(selected);
  };

  const handleCalendarClick = (selected: any) => {
    setDate(selected);
  };

  const handleIntervalClick = (selected: any) => {
    setSelectedInterval(selected);
  };

  /* useEffect(() => {
    switch (selectedInterval?.value) {
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
  }, [selectedInterval]); */

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.form__breadcrumbs}>
          <Breadcrumbs crumbs={crumbs} />
        </div>
        <fieldset className={styles.form__formFieldset}>
          <Typography tag="h2">{title}</Typography>
        </fieldset>
        <fieldset className={styles.form__inputsFieldset}>
          <div className={styles.form__menuContainer}>
            <Typography tag="p">Отправить</Typography>
            <MailingSelect
              options={send}
              currentOption={sendTime}
              handleSelect={handleSendTimeClick}
            />
          </div>
          {sendTime?.value === 'Дата/Время' && (
            <fieldset className={styles.form__dateTimeWrapper}>
              <div className={styles.form__menuContainer}>
                <span className={styles.form__iconString}>
                  <CalendarIcon /> Дата
                </span>
                <MailingSelect
                  currentOption={date}
                  toggleSelect={() => setCalendarOpen(!calendarOpen)}
                  closeSelect={() => setCalendarOpen(false)}
                  maxWidth={144}
                />
                {calendarOpen &&
                  (isMobile ? (
                    <ModalPopup
                      onClick={() => setCalendarOpen(false)}
                      closeIcon={false}
                    >
                      <Calendar handleFunction={handleCalendarClick} />
                    </ModalPopup>
                  ) : (
                    <div className={styles.form__calendar}>
                      <Calendar handleFunction={handleCalendarClick} />
                    </div>
                  ))}
              </div>
              <div className={styles.form__menuContainer}>
                <span className={styles.form__iconString}>
                  <TimeIcon /> Время
                </span>
                <TimeSelect
                  value={time}
                  onDecrease={() => {}}
                  onIncrease={() => {}}
                  saveFunction={() => {}}
                  clearFunction={() => {}}
                />
              </div>
            </fieldset>
          )}
          <div className={styles.form__menuContainer}>
            <Typography tag="p">Повторять</Typography>
            <MailingSelect
              options={repeat}
              handleSelect={handleRepeatClick}
              currentOption={selectedRepeat}
            />
          </div>
          {selectedRepeat?.value === 'Свой вариант' && (
            <div className={styles.form__hiddenInputs}>
              <div className={styles.form__smallInputsContainer}>
                <div className={styles.form__menuContainer}>
                  <Typography tag="span">Настроить</Typography>
                  <MailingSelect
                    options={howManyTimes}
                    currentOption={selectedInterval}
                    handleSelect={handleIntervalClick}
                    maxWidth={174}
                  />
                </div>
                <div className={styles.form__menuContainer}>
                  <Typography tag="span">Каждый</Typography>
                  <MailingSelect
                    options={howOften}
                    currentOption={period}
                    handleSelect={(option) => setPeriod(option)}
                    maxWidth={174}
                  />
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
                {(selectedInterval?.value === 'По месяцам' ||
                  selectedInterval?.value === 'По годам') && (
                  <div className={styles.form__dateButtons}>
                    <button
                      type="button"
                      className={styles.form__dateButton}
                      onClick={toggleFirst}
                    >
                      {selectedInterval.value === 'По месяцам'
                        ? 'Число месяца'
                        : 'Месяц отправки'}
                      {weekDay && <CheckIcon />}
                    </button>
                    {isFirstOpen && (
                      <div className={styles.form__chooseWrapper}>
                        <Typography tag="span">
                          Выберите
                          {selectedInterval.value === 'По месяцам'
                            ? ' число '
                            : ' месяц '}
                          отправки
                        </Typography>
                        <MenuVariable width="174px" nameMenu="1" buttons={[]} />
                      </div>
                    )}
                    <button
                      className={styles.form__dateButton}
                      type="button"
                      onClick={toggleSecond}
                    >
                      День месяца
                      {weekDay && <CheckIcon />}
                    </button>
                    {isSecondOpen && (
                      <div className={styles.form__chooseWrapper}>
                        <MenuVariable width="174px" nameMenu="1" buttons={[]} />
                        <MenuVariable
                          width="174px"
                          buttons={week}
                          nameMenu={!weekDay ? 'Понедельник' : weekDay}
                          onClick={(selected: string) => setWeekDay(selected)}
                        />
                      </div>
                    )}
                  </div>
                )}
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
