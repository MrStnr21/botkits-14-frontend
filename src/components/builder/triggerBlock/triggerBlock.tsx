import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './triggerBlock.module.scss';
import CloseIcon from '../../icons/Close/CloseIcon';
import ConstructorAddButton from '../../../ui/buttons/constructor-add-button/constructor-add-button';
import Trigger from '../trigger/trigger';

const TriggerBlock: FC = () => {
  const [triggers, setTriggers] = useState<string[]>([]);

  const deleteTrigger = (delId: string) => {
    const newTriggers = triggers.filter((id) => id !== delId);
    setTriggers(newTriggers);
  };

  const addTrigger = () => {
    const newTriggers = [...triggers];
    newTriggers.push(uuidv4());
    setTriggers(newTriggers);
  };

  return (
    <aside className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Триггеры</h2>
        <CloseIcon color="#A6B3C9" />
      </div>
      <div className={styles.triggers}>
        {triggers.map((id) => {
          return <Trigger deleteTrigger={deleteTrigger} id={id} key={id} />;
        })}
        <ConstructorAddButton onClick={addTrigger}>
          Добавить тэг
        </ConstructorAddButton>
      </div>
    </aside>
  );
};

export default TriggerBlock;
