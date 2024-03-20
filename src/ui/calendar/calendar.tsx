import { forwardRef, useEffect, useState } from 'react';

import {
  LocalizationProvider,
  StaticDatePicker,
  DateField,
  DateValidationError,
} from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FieldChangeHandlerContext } from '@mui/x-date-pickers/internals';

import ru from 'date-fns/locale/ru';
import { zonedTimeToUtc, format as formatZ } from 'date-fns-tz';
import { format } from 'date-fns';

import { Option } from '../../utils/types';
import { TIME_ZONE } from '../../utils/constants';
import Typography from '../typography/typography';
import Select from '../select/select';
import styles from './calendar.module.scss';

interface ICalendar {
  handleFunction: (payload: string) => void;
}

type Ref = HTMLDivElement;

const Calendar = forwardRef<Ref, ICalendar>(({ handleFunction }, ref) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [timeZone, setTimeZone] = useState<Option | undefined>(undefined);
  const [reset, setReset] = useState<boolean>(false);

  const localTimeZone = format(new Date(), 'zzz');
  const findOption = (tz: string) =>
    TIME_ZONE.find((zone) => zone.value === tz);

  useEffect(() => {
    setDate(new Date());
    setTimeZone(findOption(localTimeZone));
  }, []);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  const getInputTimeZone = (payload: Option) => {
    setTimeZone(payload);
  };

  const handleChangeDate = (
    value: Date | null,
    context: FieldChangeHandlerContext<DateValidationError>
  ) => {
    if (!context.validationError && value) {
      setDate(value);
      const zoneTimeSource = zonedTimeToUtc(value, `Etc/${timeZone}`);
      const zoneTime = formatZ(zoneTimeSource, 'yyyy-MM-dd HH:mm:ss zzz', {
        timeZone: `Etc/${timeZone}`,
      });
      handleFunction(zoneTime);
    }
  };

  const handleClear = () => {
    setReset(true);
    setDate(new Date());
  };

  const calendarTheme = createTheme({
    typography: {
      fontFamily: 'Open Sans, sans-serif',
    },
  });

  return (
    <div ref={ref}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
        <ThemeProvider theme={calendarTheme}>
          <div className={styles.container}>
            <DateField
              value={date}
              fullWidth
              timezone="UTC"
              onChange={handleChangeDate}
              className={styles.dataFiled}
            />
            <StaticDatePicker
              onChange={handleChangeDate}
              value={date}
              className={styles.staticDatePicker}
              slotProps={{
                actionBar: {
                  actions: [],
                },
                toolbar: { hidden: true },
                day: {
                  showDaysOutsideCurrentMonth: true,
                },
              }}
              defaultValue={date}
            />
            <div className={styles.containerTimeZone}>
              <Typography tag="span" className={styles.timeZoneLabel}>
                Часовой пояс
              </Typography>
              <Select
                options={TIME_ZONE}
                currentOption={timeZone}
                layoutClassName={styles.timezone}
                buttonStyle={{ width: '144px' }}
                handleSelect={getInputTimeZone}
                isScroll
              />
            </div>
            <div className={styles.containerButton}>
              <button
                type="button"
                className={styles.button}
                onClick={handleClear}
              >
                Очистить
              </button>
            </div>
          </div>
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
});

export default Calendar;
