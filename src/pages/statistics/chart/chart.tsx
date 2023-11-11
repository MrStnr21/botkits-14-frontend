import { Divider } from '@mui/material';
import { FC } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import InputSelect from '../../../ui/inputs/input-select/input-select';
import Typography from '../../../ui/typography/typography';
import styles from './chart.module.scss';
import { ChartProps } from './types';

const Periods = [
  { nameValue: 'Максимум', value: 'max' },
  { nameValue: 'Сегодня', value: 'today' },
  { nameValue: 'Вчера', value: 'yesterday' },
  { nameValue: 'Последние 7 дней', value: 'last7' },
  { nameValue: 'Последние 14 дней', value: 'last14' },
  { nameValue: 'Последние 30 дней', value: 'last30' },
  { nameValue: 'Этот месяц', value: 'thisMonth' },
  { nameValue: 'Прошлый месяц', value: 'lastMonth' },
];

const StatsChart: FC<ChartProps> = ({
  type, // подпись над заголовком
  title, // заголовок
  chartType, // вид графика - bar или line
  chartOptions, // настройки: вид лейблов, осей, плоскости
  datasetBarOptions, // настройки: отображение самих данных - цвет и т.д.
  datasetLineOptions, // либо для типа bar, либо для типа line
  chartLabels, // данные: массив значений по оси X
  chartData, // данные: массив значений по оси Y
  onPeriodSelect, // при выборе периода
  // onCalendarSelect, // при выборе календаря
}) => {
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
          <InputSelect
            values={Periods}
            defaultValue={['last14']}
            maxWidth={165}
            handleFunction={onPeriodSelect}
          />
          {/* Тут будет select с календарём */}
          <div className={styles.placeholder} />
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
