/* eslint-disable import/prefer-default-export */
/**
 * функция для форматирования даты
 * @param time строка, передаваемая в new Date(time)
 * @returns строку формата `день.месяц.год часы:минуты`
 */
export const convertTimeFormat = (time: string): string => {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  const hours = `${date.getHours()}`.padStart(2, '0');
  const minutes = `${date.getMinutes()}`.padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
