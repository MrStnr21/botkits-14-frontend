import { Divider } from '@mui/material';
import { FC, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Typography from '../../ui/typography/typography';
import styles from './chart.module.scss';
import { ChartProps } from './types';
import calendarIcon from '../../images/icon/16x16/common/calendar.svg';
import DropSelectorButton from '../../ui/buttons/drop-selector-button/drop-selector-button';
import Calendar from '../calendar/calendar';
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
  onPeriodSelect, // при выборе периода
  onCalendarSelect, // при выборе календаря
}) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const onCalendar = () => {
    console.log('calendar handler');
    onCalendarSelect();
  };

  return (
    <section className={styles.chart}>
      <div className={styles.title}>
        <div>
          <Typography tag="p" className={styles.type}>
            {type}
          </Typography>
          <Typography tag="h3" fontFamily="secondary">
            {title}
          </Typography>
        </div>
        <div className={styles.selectors}>
          <DateSelect
            options={periods}
            defaultValue="last14"
            handleSelect={onPeriodSelect}
          />
          <DropSelectorButton icon={calendarIcon} onClick={toggleCalendar} />
          {showCalendar && (
            <div className={styles.calendar}>
              <Calendar handleFunction={onCalendar} />
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
