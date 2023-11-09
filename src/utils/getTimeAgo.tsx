import TimeAgo from 'javascript-time-ago';
import ru from 'javascript-time-ago/locale/ru.json';
import ReactTimeAgo from 'react-time-ago';

TimeAgo.addDefaultLocale(ru);

export default function getTimeAgo(date: Date, style?: string) {
  if (style === 'twitter') {
    return <ReactTimeAgo timeStyle="twitter" date={date} locale="ru-RU" />;
  }
  if (style === 'custom') {
    const currentDate = new Date();
    const timeAgo = new Date(date);
    const differenceInHours = Math.floor(
      (currentDate.valueOf() - timeAgo.valueOf()) / (1000 * 60 * 60)
    );
    const hours = [1, 21];
    const hoursA = [2, 3, 4, 22, 23, 24];
    const differenceInMinutes = Math.floor(
      ((currentDate.valueOf() - timeAgo.valueOf()) / (1000 * 60 * 60)) * 60
    );
    return differenceInHours > 24
      ? timeAgo.toLocaleDateString('ru-RU')
      : differenceInHours >= 1 && differenceInHours <= 24
      ? hours.includes(differenceInHours)
        ? `${differenceInHours} час`
        : hoursA.includes(differenceInHours)
        ? `${differenceInHours} часа`
        : `${differenceInHours} часов`
      : `${differenceInMinutes} мин`;
  }
  return <ReactTimeAgo date={date} locale="ru-RU" />;
}
