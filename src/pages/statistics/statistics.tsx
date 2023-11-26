import { FC, useState } from 'react';
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
import StatsChart from '../../components/stats-chart/stats-chart';
import { Data, Labels } from '../../components/stats-chart/types';
import { Option } from '../../utils/types';
import HoveringMenuExample from '../../ui/text-field/textarea/textarea';

Chart.register(...registerables);

// Препроцессинг данных для графиков
const messengersLabels: Labels = mockPlatforms.map((data) => data.platform);
const messengersData: Data = mockPlatforms.map((data) => data.count);

const installmentLabels: Labels = mockInstallment.map((data) => data.month);
const installmentData: Data = mockInstallment.map((data) => data.count);

const totalBotsLabels: Labels = mockInstallment.map((data) => data.month);
const totalBotsData: Data = mockInstallment.map((data) => data.count);

const Statistics: FC = () => {
  // TODO заменить хардкод для дефолтного периода
  const [messengersPeriod, setMessengersPeriod] = useState<Option>(
    mockPeriods[4]
  );
  const [installmentPeriod, setInstallmentPeriod] = useState<Option>(
    mockPeriods[4]
  );
  const [totalBotsPeriod, setTotalBotsPeriod] = useState<Option>(
    mockPeriods[4]
  );

  const messengersPeriodSelect = (period: Option) => {
    console.log(period);
    setMessengersPeriod(period);
  };

  const installmentPeriodSelect = (period: Option) => {
    console.log(period);
    setInstallmentPeriod(period);
  };

  const totalBotsPeriodSelect = (period: Option) => {
    console.log(period);
    setTotalBotsPeriod(period);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography tag="h2" fontFamily="secondary">
          Статистика
        </Typography>
        <HoveringMenuExample />
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
          currentPeriod={messengersPeriod}
          onPeriodSelect={messengersPeriodSelect}
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
          currentPeriod={installmentPeriod}
          onPeriodSelect={installmentPeriodSelect}
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
          currentPeriod={totalBotsPeriod}
          onPeriodSelect={totalBotsPeriodSelect}
          onCalendarSelect={() => {
            console.log('onCalendar action');
          }}
        />
      </div>
    </div>
  );
};

export default Statistics;
