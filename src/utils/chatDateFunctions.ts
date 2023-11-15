export interface DateType extends Date {
  toDateString(): string;
}

export function formatDate(date: DateType): string {
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (date.toDateString() === now.toDateString()) {
    return 'Сегодня';
  }
  if (date.toDateString() === yesterday.toDateString()) {
    return 'Вчера';
  }
  const options: any = { day: 'numeric', month: 'long' };
  return date.toLocaleDateString('ru-RU', options);
}

export const randomDate = (): Date => {
  const startTimestamp = new Date('2023-08-05').getTime();
  const endTimestamp = new Date().getTime();

  const randomTimestamp =
    startTimestamp + Math.random() * (endTimestamp - startTimestamp);

  return new Date(randomTimestamp);
};
