import { Divider } from '@mui/material';
import { FC, useRef, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Typography from '../../../ui/typography/typography';
import styles from './stats-chart.module.scss';
import { ChartProps } from './types';
import Calendar from '../../calendar/calendar';
import useOutsideClickAndEscape from '../../../utils/hooks/useOutsideClickAndEscape';
import ButtonIcon from '../../../ui/buttons/button-icon/button-icon';
import DateSelect from '../date-selector/date-selector';

const StatsChart: FC<ChartProps> = ({
  type, // подпись над заголовком
  title, // заголовок
  chartType, // вид графика - bar или line
  chartOptions, // настройки: вид лейблов, осей, плоскости
  datasetBarOptions, // настройки: отображение самих данных - цвет и т.д.
  datasetLineOptions, // либо для типа bar, либо для типа line
  chartLabels, // данные: массив значений по оси X
  chartData, // данные: массив значений по оси Y
  periods, // данные: за какие периоды можно отобразить статистику
  currentPeriod, // данные: выбранный период
  onPeriodSelect, // при выборе периода
  onCalendarSelect, // при выборе календаря
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  useOutsideClickAndEscape(calendarRef, document, () => {
    setShowCalendar(false);
  });

  const onCalendar = () => {
    console.log('calendar handler');
    onCalendarSelect();
  };

  return (
    <section className={styles.chart}>
      <div className={styles.header}>
        <div>
          <Typography tag="p" className={styles.type}>
            {type}
          </Typography>
          <Typography tag="h3" fontFamily="secondary" className={styles.title}>
            {title}
          </Typography>
        </div>
        <div className={styles.selectors}>
          <DateSelect
            options={periods}
            currentOption={currentPeriod}
            handleSelect={onPeriodSelect}
          />
          <ButtonIcon
            icon="calendar"
            onClick={toggleCalendar}
            btnStyle={styles.calendarButton}
          />
          {showCalendar && (
            <div className={styles.calendar}>
              <Calendar handleFunction={onCalendar} ref={calendarRef} />
            </div>
          )}
        </div>
      </div>
      <Divider className={styles.divider} />
      {chartType === 'bar' ? (
        <Bar
          options={chartOptions}
          data={{
            labels: chartLabels, // массив значений по оси X
            datasets: [
              {
                data: chartData, // массив значений по оси Y
                ...datasetBarOptions,
              },
            ],
          }}
        />
      ) : (
        <Line
          options={chartOptions}
          data={{
            labels: chartLabels,
            datasets: [
              {
                data: chartData,
                ...datasetLineOptions,
              },
            ],
          }}
        />
      )}
    </section>
  );
};

export default StatsChart;
