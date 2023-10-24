import React, { ChangeEvent, FC, useState } from 'react';

import styles from './trigger.module.scss';

import Input from '../../../ui/inputs/input/input';
import ConstructorDefaultButton from '../../../ui/buttons/constructor-default-button/constructor-default-button';
import MenuVariable from '../../../ui/menus/menu-variable/menu-variable';
import TrashIcon from '../../icons/Trash/TrashIcon';

interface ITriggerProps {
  deleteTrigger: (id: number) => void;
  id: number;
}

const Trigger: FC<ITriggerProps> = ({ deleteTrigger, id }) => {
  const [tag, setTag] = useState<string>('start');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answerType, setAnswerType] = useState<'block' | 'text'>('block');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  // Это заглушка, пока неизвестно что и как будет сюда попадать
  const getButtons = () => {
    return ['Приветствие', 'Какое-нибудь действие', 'Прощание'];
  };

  return (
    <article className={styles.wrap}>
      <div className={styles.block}>
        <div className={styles.header}>
          <h3 className={styles.title}>Тэг</h3>
          <div onClick={() => deleteTrigger(id)}>
            <TrashIcon />
          </div>
        </div>
        <Input
          placeholder="Введите тэг"
          value={`${id} ${tag}`}
          onChange={handleChange}
        />
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Ответное действие бота</h3>
        <div className={styles.buttons}>
          <ConstructorDefaultButton onClick={() => setAnswerType('block')}>
            Блоком
          </ConstructorDefaultButton>
          <ConstructorDefaultButton onClick={() => setAnswerType('text')}>
            Текстом
          </ConstructorDefaultButton>
        </div>
        <MenuVariable nameMenu={getButtons()[0]} buttons={getButtons()} />
      </div>
    </article>
  );
};

export default Trigger;
