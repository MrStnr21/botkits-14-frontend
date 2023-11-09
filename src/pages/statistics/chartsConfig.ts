import {
  BarControllerDatasetOptions,
  ChartOptions,
  LineControllerDatasetOptions,
  FillerControllerDatasetOptions,
} from 'chart.js';
import { formatLabel } from './utils';

export const messengersChartOptions: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          family: 'Open Sans',
          size: 14,
          weight: '600',
          lineHeight: 1.5,
        },
      },
    },
  },
  scales: {
    y: {
      border: {
        dash(context) {
          if (context.tick.value === 0) {
            return [0];
          }
          return [4, 4];
        },
        width: 2,
        color: '#8392AB',
      },
      grid: {
        color(context) {
          if (context.tick.value === 0) {
            return '#8392AB';
          }
          return '#BFC9D9';
        },
      },
      ticks: {
        callback(this, tickValue) {
          return formatLabel(tickValue);
        },
      },
      // type: 'logarithmic'
    },
    x: {
      grid: {
        display: false,
        color: '#8392AB',
        offset: true,
      },
    },
  },
};

export const installmentChartOptions: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          family: 'Open Sans',
          size: 14,
          weight: '600',
          lineHeight: 1.5,
        },
      },
    },
  },
  scales: {
    y: {
      border: {
        display: false,
      },
      grid: {
        color: '#E5E5EF',
      },
      ticks: {
        callback(this, tickValue) {
          return formatLabel(tickValue);
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const totalBotsChartOptions: ChartOptions<'line'> = {
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          family: 'Open Sans',
          size: 14,
          weight: '600',
          lineHeight: 1.5,
        },
      },
    },
  },
  scales: {
    y: {
      border: {
        display: false,
      },
      grid: {
        color: '#E5E5EF',
      },
      ticks: {
        callback(this, tickValue) {
          return formatLabel(tickValue);
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export const messengersChartDatasetOptions: Partial<BarControllerDatasetOptions> =
  {
    borderColor: '#243CBB',
    borderWidth: 1,
    backgroundColor: '#243CBB',
    borderRadius: 12,
    barPercentage: 1,
    categoryPercentage: 0.5,
  };

export const installmentChartDatasetOptions: Partial<
  LineControllerDatasetOptions & FillerControllerDatasetOptions
> = {
  borderColor: '#243CBB',
  borderWidth: 3,
  borderDash: [10, 10],
  pointStyle: false,
  cubicInterpolationMode: 'monotone',
};

export const totalBotsChartDatasetOptions: Partial<
  LineControllerDatasetOptions & FillerControllerDatasetOptions
> = {
  borderColor: '#243CBB',
  borderWidth: 2,
  pointStyle: 'circle',
  pointRadius: 16,
  pointBorderWidth: 2,
  pointBackgroundColor: '#FFFFFF',
};
