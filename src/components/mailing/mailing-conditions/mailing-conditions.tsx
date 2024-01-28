/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import styles from './mailing-condition.module.scss';
import Typography from '../../../ui/typography/typography';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';
import InputDialogsues from '../../../ui/inputs/input-dialogues/input-dialogues';
import Calendar from '../../calendar/calendar';
import CheckIcon from '../../icons/Check/CheckIcon';
import { Option } from '../../../utils/types';
import ModalPopup from '../../popups/modal-popup/modal-popup';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { ReactComponent as CalendarIcon } from '../../../images/icon/24x24/time/calandar.svg';
import { ReactComponent as TimeIcon } from '../../../images/icon/24x24/time/time.svg';
import TimeSelect from '../time-select/time-select';
import DayPicker from '../day-picker/day-picker';
import {
  MCcrumbs,
  MCdayButtonsData,
  MChowManyTimes,
  MChowOften,
  MCrepeat,
  MCsend,
  MCweek,
} from '../../../utils/mockMailingData';
import Select from '../../../ui/select/select';

interface IProps {
  title?: string;
  handleBack?: () => void;
  handleClickButton?: () => void;
}

const MailingConditions: FC<IProps> = ({
  title,
  handleBack,
  handleClickButton,
}) => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [selectedRepeat, setSelectedRepeat] = useState<Option | null>(
    MCrepeat[0]
  );
  const [sendTime, setSendTime] = useState<Option | null>(MCsend[0]);
  const [time, setTime] = useState<number>(0);
  const [date, setDate] = useState<Option | null>(null);
  const [selectedInterval, setSelectedInterval] = useState<Option | null>(
    MChowManyTimes[0]
  );
  const [period, setPeriod] = useState<Option | null>(MChowOften[0]);
  const [weekDay, setWeekDay] = useState<string>('');

  const [dayButtons, setDayButtons] = useState<Option[]>([]);

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

  const handleCalendarClick = (selected: string) => {
    setDate({
      value: selected,
      label: selected.split(' ')[0].replaceAll('-', '.'),
    });
  };

  const handleIntervalClick = (selected: Option) => {
    setSelectedInterval(selected);
  };

  const handleTimeIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (time >= 23 * 60 + 59) {
      return;
    }
    setTime(time + 1);
  };

  const handleTimeDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (time <= 0) {
      return;
    }
    setTime(time - 1);
  };

  const handleSaveTime = (selectedTime: number) => {
    setTime(selectedTime);
  };

  const handleDayClick = (selected: Option) => {
    const itemIndex = dayButtons.findIndex(
      (item) => item.value === selected.value
    );

    if (itemIndex !== -1) {
      setDayButtons([
        ...dayButtons.slice(0, itemIndex),
        ...dayButtons.slice(itemIndex + 1),
      ]);
    } else {
      setDayButtons([...dayButtons, selected]);
    }
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
          <Breadcrumbs crumbs={MCcrumbs} />
        </div>
        <fieldset className={styles.form__formFieldset}>
          <Typography tag="h2">{title}</Typography>
        </fieldset>
        <div
          className={`${styles.form__menuContainer} ${styles['grid_1-3_3']}`}
        >
          <Typography tag="p">Отправить</Typography>
          <Select
            options={MCsend}
            currentOption={sendTime}
            handleSelect={handleSendTimeClick}
          />
        </div>
        {sendTime?.value === 'Дата/Время' && (
          <fieldset className={styles.form__smallInputsContainer}>
            <div className={styles.form__menuContainer}>
              <span className={styles.form__iconString}>
                <CalendarIcon /> Дата
              </span>
              <Select currentOption={date} options={[]} />
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
                value={`${Math.floor(time / 60) < 10 ? '0' : ''}${Math.floor(
                  time / 60
                )}:${time % 60 < 10 ? '0' : ''}${time % 60}`}
                curHour={Math.floor(time / 60)}
                curMin={time % 60}
                onDecrease={handleTimeDecrease}
                onIncrease={handleTimeIncrease}
                saveFunction={handleSaveTime}
                clearFunction={() => {}}
                isSelect
              />
            </div>
          </fieldset>
        )}
        <div
          className={`${styles.form__menuContainer} ${styles['grid_1-3_5']}`}
        >
          <Typography tag="p">Повторять</Typography>
          <Select
            options={MCrepeat}
            handleSelect={handleRepeatClick}
            currentOption={selectedRepeat}
          />
        </div>
        {selectedRepeat?.value === 'Свой вариант' && (
          <>
            <div className={styles.form__smallInputsContainer}>
              <div className={styles.form__menuContainer}>
                <Typography tag="span">Настроить</Typography>
                <Select
                  options={MChowManyTimes}
                  currentOption={selectedInterval}
                  handleSelect={handleIntervalClick}
                  buttonStyle={
                    !isMobile
                      ? {
                          maxWidth: '174px',
                        }
                      : {}
                  }
                />
              </div>
              <div className={styles.form__menuContainer}>
                <Typography tag="span">Каждый</Typography>
                <Select
                  options={MChowOften}
                  currentOption={period}
                  handleSelect={(option) => setPeriod(option)}
                  buttonStyle={
                    !isMobile
                      ? {
                          maxWidth: '174px',
                        }
                      : {}
                  }
                />
              </div>
              {!isOff && (
                <div className={styles.form__relativeInput}>
                  <InputDialogsues
                    placeholder="Введите значение"
                    onChange={() => setDat}
                  />
                  {!isMobile && (
                    <button
                      type="button"
                      className={styles.form__hideBtn}
                      onClick={() => off(!isOff)}
                    >
                      Скрыть
                    </button>
                  )}
                </div>
              )}
            </div>
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
                    <TimeSelect
                      value="1"
                      onDecrease={() => {}}
                      onIncrease={() => {}}
                      saveFunction={() => {}}
                      clearFunction={() => {}}
                      style={!isMobile ? { maxWidth: '174px' } : {}}
                    />
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
                    <TimeSelect
                      value="1"
                      onDecrease={() => {}}
                      onIncrease={() => {}}
                      saveFunction={() => {}}
                      clearFunction={() => {}}
                      style={!isMobile ? { maxWidth: '174px' } : {}}
                    />
                    <MenuVariable
                      width="174px"
                      buttons={MCweek}
                      nameMenu={!weekDay ? 'Понедельник' : weekDay}
                      onClick={(selected: string) => setWeekDay(selected)}
                    />
                  </div>
                )}
              </div>
            )}
          </>
        )}
        {selectedInterval && selectedInterval.value === 'По неделям' && (
          <div className={styles.form__dayPicker}>
            <DayPicker
              buttons={MCdayButtonsData}
              active={dayButtons}
              setValue={handleDayClick}
            />
          </div>
        )}
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
