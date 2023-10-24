/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from 'react';
import styles from './triggerBlock.module.scss';
import CloseIcon from '../../icons/Close/CloseIcon';
import ConstructorAddButton from '../../../ui/buttons/constructor-add-button/constructor-add-button';
import Trigger from '../trigger/trigger';

const TriggerBlock: FC = () => {
  const [triggers, setTriggers] = useState<React.ReactNode[]>([]);

  const deleteTrigger = (_delIndex: number) => {
    console.log(triggers);
    // const newTriggers = [...triggers];
    // newTriggers.splice(delIndex, 1);
    // setTriggers(newTriggers);
  };

  React.useEffect(() => {
    console.log(triggers);
  }, [triggers]);

  const addTrigger = () => {
    const newTriggers = [...triggers];
    newTriggers.push(
      <Trigger
        deleteTrigger={deleteTrigger}
        id={triggers.length}
        key={triggers.length}
      />
    );
    setTriggers(newTriggers);
  };

  return (
    <aside className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Триггеры</h2>
        <CloseIcon color="#A6B3C9" />
      </div>
      <div className={styles.triggers}>
        {triggers}
        <ConstructorAddButton
          onClick={() => {
            addTrigger();
          }}
        >
          Добавить тэг
        </ConstructorAddButton>
      </div>
    </aside>
  );
};

export default TriggerBlock;
