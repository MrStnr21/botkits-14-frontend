export const formatLabel = (value: number | string): string => {
  if (value >= 1000 && typeof value === 'number') {
    return Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value);
  }
  return `${value}`;
};

export const selectInflectionPoints = (data: number[]): number[] => {
  const inflectionPoints: number[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < data.length - 1; i++) {
    if (
      (data[i] > data[i - 1] && data[i] > data[i + 1]) ||
      (data[i] < data[i - 1] && data[i] < data[i + 1])
    ) {
      inflectionPoints.push(i);
    }
  }
  return inflectionPoints;
};
