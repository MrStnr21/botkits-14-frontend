import {
  BarControllerDatasetOptions,
  ChartOptions,
  LineControllerDatasetOptions,
  FillerControllerDatasetOptions,
} from 'chart.js';
import formatLabel from './utils';

/* Цвета, используемые в графиках */
// Можно попробовать экспорт из _variables.scss
const colors = {
  data: '#243CBB', // $primary-persian-blue-default
  barGrid: '#BFC9D9', // grey-2
  lineGrid: '#E5E5EF', // нет переменной, neutral-colors-500 в макете
  labels: '#8392AB', // $grey-4
  background: '#FFFFFF', // $off-white
  tooltip: '#060C23', // $primary-oxford-blue-default
};

/* Часто встречающиеся настройки */
const labelsFont = {
  family: 'Open Sans',
  size: 14,
  weight: '600',
  lineHeight: 1.5,
};

// спрятать легенду
const hideLegend = {
  legend: {
    display: false,
  },
};

// всплывающая подсказка, по дефолту включена. В макете нет, настроила по усмотрению
// не показывать заголовок (лейбл по оси X) и квадратик со цветом
const showTooltip = {
  tooltip: {
    bodyFont: labelsFont,
    displayColors: false,
    backgroundColor: colors.tooltip,
    callbacks: {
      title: () => '',
      // eslint-disable-next-line func-names, object-shorthand
      label: function (context: any) {
        return context.parsed.y;
      },
    },
  },
};

/* Настройки шкал, легенды, подписей */
export const messengersChartOptions: ChartOptions<'bar'> = {
  // разнообразные настройки
  plugins: {
    ...hideLegend,
    ...showTooltip,
  },
  // шкалы
  scales: {
    y: {
      border: {
        // штриховка
        dash(context) {
          if (context.tick.value === 0) {
            return [0]; // ось - сплошная линия
          }
          return [4, 4];
        },
        width: 1,
        color: colors.labels,
      },
      // сетка по шкале Y
      grid: {
        color(context) {
          if (context.tick.value === 0) {
            return colors.labels;
          }
          return colors.barGrid;
        },
      },
      // метки делений - в формате 100k, 1M
      ticks: {
        callback(this, tickValue) {
          return formatLabel(tickValue);
        },
        font: labelsFont,
      },
      // type: 'logarithmic'
    },
    x: {
      border: {
        width: 1,
      },
      grid: {
        display: false,
        color: colors.labels,
      },
      ticks: {
        font: labelsFont,
      },
    },
  },
};

export const installmentChartOptions: ChartOptions<'line'> = {
  plugins: {
    ...hideLegend,
    ...showTooltip,
  },
  scales: {
    y: {
      border: {
        display: false,
      },
      grid: {
        color: colors.lineGrid,
      },
      ticks: {
        callback(this, tickValue) {
          return formatLabel(tickValue);
        },
        font: labelsFont,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: labelsFont,
      },
    },
  },
};

export const totalBotsChartOptions: ChartOptions<'line'> = {
  plugins: {
    ...hideLegend,
    ...showTooltip,
  },
  scales: {
    y: {
      border: {
        display: false,
      },
      grid: {
        color: colors.lineGrid,
      },
      ticks: {
        callback(this, tickValue) {
          return formatLabel(tickValue);
        },
        font: labelsFont,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: labelsFont,
      },
    },
  },
};

/* Настройки отображения данных */
export const messengersDatasetOptions: Partial<BarControllerDatasetOptions> = {
  borderColor: colors.data,
  borderWidth: 1,
  backgroundColor: colors.data,
  borderRadius: 12,
  barPercentage: 1,
  categoryPercentage: 0.5,
};

export const installmentDatasetOptions: Partial<
  LineControllerDatasetOptions & FillerControllerDatasetOptions
> = {
  borderColor: colors.data,
  borderWidth: 3,
  borderDash: [10, 10],
  pointStyle: false,
  cubicInterpolationMode: 'monotone',
};

export const totalBotsDatasetOptions: Partial<
  LineControllerDatasetOptions & FillerControllerDatasetOptions
> = {
  borderColor: colors.data,
  borderWidth: 2,
  pointStyle: 'circle',
  pointRadius: 8,
  pointBorderWidth: 2,
  pointBackgroundColor: colors.background,
};
