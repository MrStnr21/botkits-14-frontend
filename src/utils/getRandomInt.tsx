/**
 * функция для получения случайного целого числа от `0` до `max - 1`
 */
export default function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
