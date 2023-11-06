import { FC, useEffect, useState } from 'react';

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

import stylesCalendar from './calendar.module.scss';

import InputSelect from '../../ui/inputs/input-select/input-select';

import { TIME_ZONE } from '../../utils/constants';
import Typography from '../../ui/typography/typography';

interface ICalendar {
  handleFunction: (payload: string) => void;
}

const Calendar: FC<ICalendar> = ({ handleFunction }): JSX.Element => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [timeZone, setTimeZone] = useState<string>('');
  const [reset, setReset] = useState<boolean>(false);

  const localTimeZone = format(new Date(), 'zzz');

  useEffect(() => {
    setDate(new Date());
    setTimeZone(localTimeZone);
  }, []);

  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  const getInputTimeZone = (payload: string) => {
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
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
      <ThemeProvider theme={calendarTheme}>
        <div className={stylesCalendar.container}>
          <DateField
            value={date}
            fullWidth
            timezone="UTC"
            onChange={handleChangeDate}
            className={stylesCalendar.dataFiled}
          />
          <StaticDatePicker
            onChange={handleChangeDate}
            value={date}
            className={stylesCalendar.staticDatePicker}
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
          <div className={stylesCalendar.containerTimeZone}>
            <Typography tag="span" className={stylesCalendar.timeZoneLabel}>
              Часовой пояс
            </Typography>
            <InputSelect
              maxWidth={144}
              values={TIME_ZONE}
              defaultValue={[localTimeZone]}
              handleFunction={getInputTimeZone}
              resetSelect={reset}
            />
          </div>
          <div className={stylesCalendar.containerButton}>
            <button
              type="button"
              className={stylesCalendar.button}
              onClick={handleClear}
            >
              Очистить
            </button>
          </div>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default Calendar;
