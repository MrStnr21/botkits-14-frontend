// to do: calendar
// https://trello.com/c/cBVPYbCl/11-%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C
import { FC, useEffect, useState } from 'react';

import {
  LocalizationProvider,
  StaticDatePicker,
  DateField,
  DateValidationError,
} from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru';
import { zonedTimeToUtc, format as formatZ } from 'date-fns-tz';
import { format } from 'date-fns';
import { FieldChangeHandlerContext } from '@mui/x-date-pickers/internals';
import InputSelect from '../../ui/inputs/input-select/input-select';
import { TIME_ZONE } from '../../utils/constants';
import stylesCalendar from './calendar.module.scss';

interface ICalendar {
  handleFunction: (payload: string) => void;
}

const Calendar: FC<ICalendar> = ({ handleFunction }) => {
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
    //  setReset(false);
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
            sx={{
              maxHeight: '40px',
              marginBottom: '30px',
              backgroundColor: '#F8F9FB',
              '.MuiInputBase-input': {
                fontSize: '13px',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '150%',
                letterSpacing: '0.3px',
                color: '#060C23',
                padding: '10px 8px 10px 8px',
              },
              '.MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderRadius: '5px',
                maxHeight: '40px',
              },
            }}
          />
          <StaticDatePicker
            onChange={handleChangeDate}
            value={date}
            slotProps={{
              layout: {
                sx: {
                  '.MuiDateCalendar-root': {
                    width: '100%',
                    minWidth: '296px',
                  },
                  '.MuiDayCalendar-weekDayLabel': {
                    maxWidth: '26px',
                    boxSizing: 'content-box',
                    height: '100%',
                    fontSize: '13px',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    lineHeight: '150%',
                    letterSpacing: '0.3px',
                    color: '#060C23',
                    margin: 0,
                    padding: 0,
                  },
                  '.MuiDayCalendar-header': {
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                  },
                  '.MuiDayCalendar-slideTransition': {
                    minHeight: '200px',
                  },
                  '.MuiDayCalendar-weekContainer': {
                    margin: '0px',
                    marginBottom: '6px',
                    justifyContent: 'space-between',
                  },
                  '.MuiPickersDay-dayOutsideMonth': {
                    color: '#A6B3C9',
                  },
                  '.MuiPickersDay-today': {
                    borderRadius: '4px',
                  },
                  '.Mui-selected': {
                    borderRadius: '4px',
                  },
                  '.MuiPickersYear-yearButton:hover': {
                    borderRadius: '4px',
                  },
                },
              },
              actionBar: {
                actions: [],
              },
              toolbar: { hidden: true },
              calendarHeader: {
                sx: {
                  paddingLeft: '5px',
                  paddingRight: '0px',
                  marginTop: '0px',
                  marginBottom: '20px',
                  '.MuiPickersCalendarHeader-switchViewIcon': {
                    display: 'none',
                  },
                  '.MuiPickersCalendarHeader-label': {
                    fontSize: '13px',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    lineHeight: '150%',
                    letterSpacing: '0.3px',
                    color: '#060C23',
                    textTransform: 'capitalize',
                    margin: 0,
                    padding: 0,
                  },
                },
              },
              nextIconButton: {
                sx: {
                  padding: '0px',
                  color: '#A6B3C9',
                },
              },
              previousIconButton: {
                sx: {
                  padding: '0px',
                  color: '#A6B3C9',
                },
              },
              day: {
                showDaysOutsideCurrentMonth: true,
                sx: {
                  maxWidth: '26px',
                  maxHeight: '26px',
                  margin: '0px',
                  fontSize: '13px',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  lineHeight: '150%',
                  letterSpacing: '0.3px',
                  color: '#060C23',
                  ':hover': {
                    borderRadius: '4px',
                  },
                },
              },
            }}
            sx={{
              width: '100%',
              minWidth: '296px',
            }}
            defaultValue={date}
          />
          <div className={stylesCalendar.containerTimeZone}>
            <span className={stylesCalendar.timeZoneLabel}>Часовой пояс</span>
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
