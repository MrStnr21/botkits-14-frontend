// to do: calendar
// https://trello.com/c/cBVPYbCl/11-%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C
import { FC, useEffect, useState } from 'react';
import {
  LocalizationProvider,
  StaticDatePicker,
  DateField,
} from '@mui/x-date-pickers';
import { ThemeProvider, createTheme } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru';
import '../app/_vars.scss';
import stylesCalendar from './calendar.module.scss';

const Calendar: FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    setDate(new Date());
  }, []);

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
            helperText
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
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default Calendar;
