import TimeAgo from 'javascript-time-ago';
import ru from 'javascript-time-ago/locale/ru.json';
import ReactTimeAgo from 'react-time-ago';

TimeAgo.addDefaultLocale(ru);

export default function getTimeAgo(date: Date, style?: string) {
  if (style === 'twitter') {
    return <ReactTimeAgo timeStyle="twitter" date={date} locale="ru-RU" />;
  }
  return <ReactTimeAgo date={date} locale="ru-RU" />;
}
