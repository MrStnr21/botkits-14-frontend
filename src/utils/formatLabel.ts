/* Преобразует запись числа в сокращенную форму (10000K - 10K) */
const formatLabel = (value: number | string): string => {
  if (value >= 1000 && typeof value === 'number') {
    return Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  }
  return `${value}`;
};

export default formatLabel;
