import {
  ChartOptions,
  LineControllerDatasetOptions,
  FillerControllerDatasetOptions,
  BarControllerDatasetOptions,
} from 'chart.js';

import type { Option } from '../../../utils/types';

type CommonProps = {
  type: string;
  title: string;
  chartOptions: ChartOptions<'line' | 'bar'>;
  chartLabels: string[];
  chartData: number[];
  periods: Option[];
  currentPeriod: Option;
  onPeriodSelect: (period: Option) => void;
  onCalendarSelect: () => void;
};

// datasetLineOptions через union не прошёл, пришлось сделать два варианта
type ConditionalProps =
  | {
      chartType: 'line';
      chartOptions: ChartOptions<'line'>;
      datasetLineOptions?: Partial<
        LineControllerDatasetOptions & FillerControllerDatasetOptions
      >;
      datasetBarOptions?: never;
    }
  | {
      chartType: 'bar';
      chartOptions: ChartOptions<'bar'>;
      datasetBarOptions?: Partial<BarControllerDatasetOptions>;
      datasetLineOptions?: never;
    };

export type ChartProps = CommonProps & ConditionalProps;

export type Labels = string[];
export type Data = number[];
