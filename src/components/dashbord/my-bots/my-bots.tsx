// to do: MyBots
// https://trello.com/c/6gxmCXj9/23-%D0%BC%D0%BE%D0%B8-%D0%B1%D0%BE%D1%82%D1%8B

import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './my-bots.module.scss';

import Bot from '../../../ui/bot/bot';
import ButtonAddBot from '../../../ui/buttons/button-add-bot/button-add-bot';

const bots = [
  'Салон красоты',
  'Запись клиентов для консультации',
  'Опрос клиентов для проведения встречи',
];

const MyBots: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Мои боты</h1>
      <ul className={styles.list}>
        {bots.map((bot) => (
          <li key={uuidv4()}>
            <Bot text={bot} />
          </li>
        ))}
        <li key={uuidv4()} className={styles.buttonAddbot}>
          <ButtonAddBot>Добавить бота</ButtonAddBot>
        </li>
      </ul>
    </div>
  );
};

export default MyBots;
