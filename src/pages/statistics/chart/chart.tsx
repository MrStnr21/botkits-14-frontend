import { Divider } from '@mui/material';
import {
  ChartOptions,
  BarControllerDatasetOptions,
  LineControllerDatasetOptions,
  FillerControllerDatasetOptions,
} from 'chart.js';
import { FC } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import InputSelect from '../../../ui/inputs/input-select/input-select';
import Typography from '../../../ui/typography/typography';
import styles from './chart.module.scss';

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

type CommonProps = {
  type: string;
  title: string;
  chartOptions: ChartOptions<'line' | 'bar'>;
  chartLabels: string[];
  chartData: number[];
  onSelect: () => void;
};

type ConditionalProps =
  | {
      componentType: 'line';
      chartOptions: ChartOptions<'line'>;
      datasetLineOptions?: Partial<
        LineControllerDatasetOptions & FillerControllerDatasetOptions
      >;
      datasetBarOptions?: never;
    }
  | {
      componentType: 'bar';
      chartOptions: ChartOptions<'bar'>;
      datasetBarOptions?: Partial<BarControllerDatasetOptions>;
      datasetLineOptions?: never;
    };

type Props = CommonProps & ConditionalProps;

const StatsChart: FC<Props> = ({
  type,
  title,
  componentType,
  chartOptions,
  datasetBarOptions,
  datasetLineOptions,
  chartLabels,
  chartData,
  onSelect,
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
        <div>
          <InputSelect
            values={Periods}
            defaultValue={['last14']}
            maxWidth={165}
            handleFunction={onSelect}
          />
        </div>
      </div>
      <Divider className={styles.divider} />
      {componentType === 'bar' ? (
        <Bar
          options={chartOptions}
          data={{
            labels: chartLabels,
            datasets: [
              {
                data: chartData,
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
