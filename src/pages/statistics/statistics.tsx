import { FC } from 'react';
import { Chart, registerables } from 'chart.js';
import Typography from '../../ui/typography/typography';
import Button from '../../ui/buttons/button/button';
import styles from './statistics.module.scss';
import {
  mockPlatforms,
  mockInstallment,
  mockPeriods,
} from '../../utils/mockStatistics';
import {
  installmentDatasetOptions,
  installmentChartOptions,
  messengersDatasetOptions,
  messengersChartOptions,
  totalBotsChartOptions,
  totalBotsDatasetOptions,
} from './chartsConfig';
import StatsChart from '../../components/chart/chart';
import { Data, Labels } from '../../components/chart/types';

Chart.register(...registerables);

// Препроцессинг данных для графиков
const messengersLabels: Labels = mockPlatforms.map((data) => data.platform);
const messengersData: Data = mockPlatforms.map((data) => data.count);

const installmentLabels: Labels = mockInstallment.map((data) => data.month);
const installmentData: Data = mockInstallment.map((data) => data.count);

const totalBotsLabels: Labels = mockInstallment.map((data) => data.month);
const totalBotsData: Data = mockInstallment.map((data) => data.count);

const Statistics: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography tag="h2" fontFamily="secondary">
          Статистика
        </Typography>
        <div className={styles.wrapper}>
          <Button
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="submit"
          >
            Выгрузить
          </Button>
        </div>
      </div>
      <div className={styles.statistics}>
        <StatsChart
          type="Боты"
          title="Статистика по мессенджерам"
          chartType="bar"
          chartOptions={messengersChartOptions}
          datasetBarOptions={messengersDatasetOptions}
          chartLabels={messengersLabels}
          chartData={messengersData}
          periods={mockPeriods}
          onPeriodSelect={() => {
            console.log('onSelect action');
          }}
          onCalendarSelect={() => {
            console.log('onCalendar action');
          }}
        />
        <StatsChart
          type="Шаблоны"
          title="Установка шаблонов в пользовательских кабинетах"
          chartType="line"
          chartOptions={installmentChartOptions}
          datasetLineOptions={installmentDatasetOptions}
          chartLabels={installmentLabels}
          chartData={installmentData}
          periods={mockPeriods}
          onPeriodSelect={() => {
            console.log('onSelect action');
          }}
          onCalendarSelect={() => {
            console.log('onCalendar action');
          }}
        />
        <StatsChart
          type="Боты"
          title="Общее количество подключенных ботов"
          chartType="line"
          chartOptions={totalBotsChartOptions}
          datasetLineOptions={totalBotsDatasetOptions}
          chartLabels={totalBotsLabels}
          chartData={totalBotsData}
          periods={mockPeriods}
          onPeriodSelect={() => {
            console.log('onSelect action');
          }}
          onCalendarSelect={() => {
            console.log('onCalendar action');
          }}
        />
      </div>
    </div>
  );
};

export default Statistics;
