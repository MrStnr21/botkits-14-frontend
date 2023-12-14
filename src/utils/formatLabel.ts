/**
 * Преобразует запись числа в сокращенную форму `10000 - 10K`
 */
const formatLabel = (value: number | string): string => {
  if (typeof value === 'number' && value >= 1000) {
    return Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  }
  return `${value}`;
};

export default formatLabel;
