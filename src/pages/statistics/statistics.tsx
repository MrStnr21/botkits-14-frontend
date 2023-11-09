import { FC } from 'react';
import { Chart, registerables } from 'chart.js';
import Typography from '../../ui/typography/typography';
import Button from '../../ui/buttons/button/button';
import styles from './statistics.module.scss';
import { mockPlatforms, mockInstallment } from '../../utils/mockStatistics';
import {
  installmentChartDatasetOptions,
  installmentChartOptions,
  messengersChartDatasetOptions,
  messengersChartOptions,
  totalBotsChartOptions,
  totalBotsChartDatasetOptions,
} from './chartsConfig';
import StatsChart from './chart/chart';

Chart.register(...registerables);

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
          componentType="bar"
          chartOptions={messengersChartOptions}
          datasetBarOptions={messengersChartDatasetOptions}
          chartLabels={mockPlatforms.map((data) => data.platform)}
          chartData={mockPlatforms.map((data) => data.count)}
          onSelect={() => {
            console.log('onSelect action');
          }}
        />
        <StatsChart
          type="Шаблоны"
          title="Установка шаблонов в пользовательских кабинетах"
          componentType="line"
          chartOptions={installmentChartOptions}
          datasetLineOptions={installmentChartDatasetOptions}
          chartLabels={mockInstallment.map((data) => data.month)}
          chartData={mockInstallment.map((data) => data.count)}
          onSelect={() => {
            console.log('onSelect action');
          }}
        />
        <StatsChart
          type="Боты"
          title="Общее количество подключенных ботов"
          componentType="line"
          chartOptions={totalBotsChartOptions}
          datasetLineOptions={totalBotsChartDatasetOptions}
          chartLabels={mockInstallment.map((data) => data.month)}
          chartData={mockInstallment.map((data) => data.count)}
          onSelect={() => {
            console.log('onSelect action');
          }}
        />
      </div>
    </div>
  );
};

export default Statistics;
